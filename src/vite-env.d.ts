/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_APP_LAYOUT: string; // Define que a variável de ambiente VITE_APP_LAYOUT é do tipo string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }