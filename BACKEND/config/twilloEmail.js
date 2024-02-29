const nodemailer = require("nodemailer");

const sendEmail = async (data, req, res) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();









  // create reusable transporter object using the default SMTP transport





// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
// });








  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",

    port: 587,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
    //   user: "lucie.sipes17@ethereal.email",
    //   pass: "fbhXSz7bTWG4hN9HuT",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(
    {
      from: "kamleshrathod2092000@gmail.com", // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
      html: data.htm, // html body
    },
     function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }}
    
  );

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = sendEmail;
