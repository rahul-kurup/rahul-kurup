export default {
  serverOnly: {
    mail: {
      account: process.env.MAIL_ACC,
      password: process.env.MAIL_PWD,
      service: process.env.MAIL_SERVICE,
      from: process.env.MAIL_ACC_FROM,
      to: process.env.MAIL_ACC_TO,
    }
  }
};
