/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS__SERVICE_ID: string
  readonly VITE_EMAILJS__TEMPLATE_ID: string
  readonly VITE_EMAILJS__PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}