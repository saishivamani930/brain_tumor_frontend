/// <reference types="vite/client" />

// (optional but nice) add strong typing for your env var(s)
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
