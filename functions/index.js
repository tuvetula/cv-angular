const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const loginMdp = require("./loginMdp")
admin.initializeApp();

exports.sendEmail = functions.firestore
  .document("contacts/{contactId}")
  .onCreate((snap, context) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: loginMdp.mail,
        pass: loginMdp.mdp,
      },
    });
    const mailOptions = {
      from: `romain.marcant@gmail.com`,
      to: `romain.marcant@gmail.com`,
      subject: "Nouveau message de cv-marcant-romain.app",
      html: `<h3>Vous avez reçu un nouveau message: </h3>
            <p><b>Nom: </b>${snap.data().name}</p>
            <p><b>Prénom: </b>${snap.data().firstName}</p>
            <p><b>Email: </b><a href="mailto:${snap.data().email}">${snap.data().email}</a></p>
            <p><b>Message: </b>${snap.data().message}</p>`
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log("Erreur: " + error);
        return ;
      }
      console.log("Message envoyé");
      return snap;
    });
  });
