// vite.d.ts
declare module '*.jpg' {
  const src: string;
  export default src;
}

interface ImportMeta {
  globEager(
    pattern: string
  ): Record<string, () => Promise<{ [key: string]: any }>>;
}
