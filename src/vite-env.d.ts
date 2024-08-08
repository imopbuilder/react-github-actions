/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_BASE_URL: string;
  readonly VITE_HELLO: string;
  readonly VITE_NEW_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
