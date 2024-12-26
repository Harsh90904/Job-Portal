const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:"diyoraharsh6@gmail.com",
    pass: "qful anrw rmov oekc",
  },
});

exports.sendMail = async (to, subject, text) => {
  try {
    await transporter.sendMail({ from:"diyoraharsh6@gmail.com", to, subject, text });
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};
