/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIVE?: string;
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  readonly VITE_TRACK_MSFT_CLARITY?: string;
  readonly VITE_TRACK_GGL_ANALYTICS?: string;
  readonly VITE_TRACK_GGL_TAG_MANAGER?: string;
}