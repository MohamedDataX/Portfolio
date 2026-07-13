/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms public access key — injected at build from a GitHub Actions secret. */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
