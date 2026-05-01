import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;
const srcPagesDir = path.join(rootDir, 'src', 'pages');
const distDir = path.join(rootDir, 'dist');
const distIndexHtmlPath = path.join(distDir, 'index.html');

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

async function collectPageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectPageFiles(fullPath)));
      continue;
    }

    if (/\.(jsx|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function pageFileToRoute(pageFile) {
  const relative = path.relative(srcPagesDir, pageFile);
  const withoutExtension = relative.replace(/\.(jsx|tsx)$/, '');
  const normalized = toPosixPath(withoutExtension);

  if (normalized === 'index') {
    return '/';
  }

  if (normalized.endsWith('/index')) {
    return `/${normalized.slice(0, -'/index'.length)}`;
  }

  return `/${normalized}`;
}

function resolveOutputHtmlPath(routePath) {
  if (routePath === '/') {
    return distIndexHtmlPath;
  }

  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

function injectRenderedHtml(template, appHtml) {
  if (template.includes('<!--app-html-->')) {
    return template.replace('<!--app-html-->', appHtml);
  }

  return template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function verifyGeneratedHtml(routePath, html, outputPath) {
  if (!html || html.trim().length < 200) {
    throw new Error(`SSG verification failed for "${routePath}": rendered HTML is too small.`);
  }

  if (!/<div[^>]*id="root"[^>]*>[\s\S]*<\/div>/.test(html)) {
    throw new Error(`SSG verification failed for "${routePath}": root container is empty in ${outputPath}.`);
  }

  if (!/<main[\s>]/i.test(html) && !/ET ART/i.test(html)) {
    throw new Error(`SSG verification failed for "${routePath}": expected page content was not found in ${outputPath}.`);
  }
}

async function run() {
  const pageFiles = await collectPageFiles(srcPagesDir);

  if (pageFiles.length === 0) {
    throw new Error(`No page files found in ${srcPagesDir}.`);
  }

  const template = await fs.readFile(distIndexHtmlPath, 'utf8');
  const viteServer = await createServer({
    appType: 'custom',
    configFile: path.join(rootDir, 'vite.config.ts'),
    root: rootDir,
    server: { middlewareMode: true },
  });

  try {
    const { render } = await viteServer.ssrLoadModule('/src/entry-server.tsx');

    for (const pageFile of pageFiles) {
      const routePath = pageFileToRoute(pageFile);
      const modulePath = `/${toPosixPath(path.relative(rootDir, pageFile))}`;
      const appHtml = await render(routePath, modulePath);
      const finalHtml = injectRenderedHtml(template, appHtml);
      const outputPath = resolveOutputHtmlPath(routePath);

      verifyGeneratedHtml(routePath, finalHtml, outputPath);

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, finalHtml, 'utf8');

      const stats = await fs.stat(outputPath);
      if (stats.size < 1024) {
        throw new Error(`SSG verification failed for "${routePath}": output file ${outputPath} is unexpectedly small.`);
      }
    }
  } finally {
    await viteServer.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
