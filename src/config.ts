export default {
  font: {
    primary: {
      name: 'PT Sans',
      scriptFamily: 'PT+Sans',
      family: `'PT Sans', cursive`,
    },
    cursive: {
      name: 'recursive',
      family: `'Recursive', sans-serif`,
      scriptFamily: 'Recursive:CASL@1',
    }
  },
  track: {
    microsoft: {
      clarity: 'cka0cvo5ve'
    },
    google: {
      analytics: 'G-TJQYVVEXPZ',
      tagManager: 'GTM-KB49KXR'
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
