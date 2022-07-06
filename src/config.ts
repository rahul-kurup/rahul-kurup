export default {
  live: process.env.NEXT_PUBLIC_LIVE === '1',
  font: {
    primary: {
      name: 'PT Sans',
      scriptFamily: 'PT+Sans:wght@400',
      family: `'PT Sans', cursive`
    },
    cursive: {
      name: 'recursive',
      family: `'Recursive', sans-serif`,
      scriptFamily: 'Recursive:CASL@1'
    }
  },
  track: {
    microsoft: {
      clarity: process.env.NEXT_PUBLIC_TRACK_MSFT_CLARITY || ''
    },
    google: {
      analytics: process.env.NEXT_PUBLIC_TRACK_GGL_ANALYTICS || '',
      tagManager: process.env.NEXT_PUBLIC_TRACK_GGL_TAG_MANAGER || ''
    }
  },
  serverOnly: {
    mail: {
      from: process.env.MAIL_ACC_FROM || '',
      to: (process.env.MAIL_ACC_TO || '').split(',').map(m => m.trim()),
      sendGrid: {
        apiKey: process.env.SEND_GRID_API_KEY || ''
      }
    }
  }
};
