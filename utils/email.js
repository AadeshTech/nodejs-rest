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
  const url = `https://nodejs-rest-1.onrender.com/api/auth/verify-email/${token}`;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: 'Verify Your Email',
    html: `<p>Please verify your email: <a href="${url}">${url}</a></p>`
  });
};