interface ImportMetaEnv {
    VITE_DATABASE_URL: string;
    readonly VITE_YOUR_URL: string;
    readonly VITE_REALM: string;
    readonly VITE_CLIENT_ID: string;
   
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />