import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

function ensureServerStoragePolyfill() {
  const noop = () => {};
  const fakeEventTarget = {
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: noop,
  };

  if (typeof globalThis.window === 'undefined') {
    Object.defineProperty(globalThis, 'window', {
      configurable: true,
      value: {
        ...fakeEventTarget,
        requestAnimationFrame: (callback: FrameRequestCallback) => setTimeout(callback, 0),
        cancelAnimationFrame: (id: number) => clearTimeout(id),
        matchMedia: () => ({
          matches: false,
          media: '',
          onchange: null,
          ...fakeEventTarget,
        }),
      },
    });
  }

  if (typeof globalThis.document === 'undefined') {
    Object.defineProperty(globalThis, 'document', {
      configurable: true,
      value: {
        ...fakeEventTarget,
        documentElement: fakeEventTarget,
        body: fakeEventTarget,
        createElement: () => fakeEventTarget,
      },
    });
  }

  if (typeof globalThis.navigator === 'undefined') {
    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: { userAgent: 'ssg' },
    });
  }

  if (typeof globalThis.localStorage === 'undefined') {
    const storage = new Map<string, string>();

    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: {
        getItem(key: string) {
          return storage.has(key) ? storage.get(key)! : null;
        },
        setItem(key: string, value: string) {
          storage.set(key, String(value));
        },
        removeItem(key: string) {
          storage.delete(key);
        },
        clear() {
          storage.clear();
        },
        key(index: number) {
          return Array.from(storage.keys())[index] ?? null;
        },
        get length() {
          return storage.size;
        },
      },
    });
  }

  if (typeof globalThis.sessionStorage === 'undefined') {
    Object.defineProperty(globalThis, 'sessionStorage', {
      configurable: true,
      value: globalThis.localStorage,
    });
  }

  if (typeof globalThis.requestAnimationFrame === 'undefined') {
    Object.defineProperty(globalThis, 'requestAnimationFrame', {
      configurable: true,
      value: globalThis.window.requestAnimationFrame,
    });
  }

  if (typeof globalThis.cancelAnimationFrame === 'undefined') {
    Object.defineProperty(globalThis, 'cancelAnimationFrame', {
      configurable: true,
      value: globalThis.window.cancelAnimationFrame,
    });
  }
}

type PageModule = {
  default: React.ComponentType;
};

export async function render(url: string, pageModulePath = './pages/index.jsx') {
  ensureServerStoragePolyfill();

  const pageModule = (await import(/* @vite-ignore */ pageModulePath)) as PageModule;
  const Page = pageModule.default;

  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Page />
    </StaticRouter>,
  );
}
