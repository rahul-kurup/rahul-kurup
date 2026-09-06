const config = {
  live: import.meta.env.VITE_LIVE === '1',
  recaptcha: {
    enabled: false,
    tokenHeader: 'recaptcha-token',
    siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''
  },
  track: {
    microsoft: {
      clarity: import.meta.env.VITE_TRACK_MSFT_CLARITY || ''
    },
    google: {
      analytics: import.meta.env.VITE_TRACK_GGL_ANALYTICS || '',
      tagManager: import.meta.env.VITE_TRACK_GGL_TAG_MANAGER || ''
    }
  }
};

export default config;