export default {
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
