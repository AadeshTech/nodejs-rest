const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

exports.sendVerificationEmail = async (to, token) => {
  const url = `https://0080-2405-201-3021-9818-e015-f5c0-cf3d-6bb0.ngrok-free.app/api/auth/verify-email/${token}`;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: 'Verify Your Email',
    html: `<p>Please verify your email: <a href="${url}">${url}</a></p>`
  });
};