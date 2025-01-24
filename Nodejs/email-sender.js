const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", 
    pass: "whk234",
  },
});

// Email options
const mailOptions = {
  from: "your-email@gmail.com", // Replace with your email
  to: "obina@gmail.com", // Replace with recipient email
  subject: "Test Email from Node.js",
  text: "Hello! This is a test email sent from Node.js.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});