import { execFileSync } from 'node:child_process';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function lovableSsgPostbuildPlugin(): Plugin {
  return {
    name: 'lovable-ssg-postbuild',
    apply: 'build',
    closeBundle() {
      execFileSync(process.execPath, ['prerender.js'], {
        cwd: process.cwd(),
        stdio: 'inherit',
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), lovableSsgPostbuildPlugin()],
});
