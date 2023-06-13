// const fse = require('fs-extra');
// const {resolve} = require('path');

const util = require("node:util");
const execFile = util.promisify(require("node:child_process").execFile);

async function lsDir() {
  const { error, stdout, stderr } = await execFile("ls", ["-l"]);
  console.log(`External Program's output:\n ${stdout}`);
}
lsDir();

// try {
//     fse.moveSync(srcDir, destDir, { overwrite: true|false })
//     console.log('success!')
//   } catch (err) {
//     console.error(err)
//   }
// // const nodemailer = require('nodemailer');
// // const fs = require('fs')
// // // Configuration du transporteur SMTP
// // const transporter = nodemailer.createTransport({
// // //   service: 'gmail',
// //   host: "smtp.office365.com",
// //   port: 587,
// //   auth: {
// //     user: 'gregory.arnal@hotmail.com',
// //     pass: 'jothys-rantak-raCji3'
// //   }
// // });

// // fs.readFile('mail_template.txt', function (err, data) {
// //     // Options de l'e-mail
// //         const mailOptions = {
// //             from: 'gregory.arnal@hotmail.com',
// //             to: 'gregory.arnal@icloud.com',
// //             subject: 'Sujet de l\'e-mail',
// //             html: data.toString()
// //         };
        
// //         // Envoi de l'e-mail
// //         transporter.sendMail(mailOptions, function(error, info) {
// //             if (error) {
// //             console.log(error);
// //             } else {
// //             console.log('E-mail envoyé: ' + info.response);
// //             }
// //         });
// //     // console.log("Asynchronous read: " + data.toString());
// //  });

// // const nodemailer = require("nodemailer");
// const sgMail = require('@sendgrid/mail')
// console.log('Extension chargée : ' + new Date());

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const mailOptions = {
//     from: 'gregory.arnal@hotmail.com',
//     to: 'gregory.arnal@icloud.com',
//     subject: 'Sujet de l\'e-mail',
//     text: "data.toString()",
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// // Envoi de l'e-mail
// sgMail
// .send(mailOptions)
// .then(() => {
//   console.log('Email sent')
// })
// .catch((error) => {
//   console.error(error)
// })