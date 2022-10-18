const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      pool: process.env.MAIL_POOL,
      rateLimit: process.env.MAIL_RATE_LIMIT,
      maxConnections: process.env.MAIL_MAX_CONNECTIONS,
      maxMessages: process.env.MAIL_MAX_MESSAGES,
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music Apps',
      to: targetEmail,
      subject: 'Export of Songs in Playlist',
      text: 'Attached the results of the export of songs in the playlist',
      attachments: [
        {
          filename: 'songs.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
