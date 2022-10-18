const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      pool: process.env.SMTP_POOL,
      rateLimit: process.env.SMTP_RATE_LIMIT,
      maxConnections: process.env.SMTP_MAX_CONNECTIONS,
      maxMessages: process.env.SMTP_MAX_MESSAGES,
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
