const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/data", async (req, res) => {
  let { name, email, phone, message } = req.body;

  let mailTransporter = nodemailer.createTransport({
    host: "host11.registrar-servers.com",
    port: 465,
    secure: true,
    auth: {
      user: "pacientes@doctorapamelaperez.com",
      pass: "No$eJ0b93",
    },
  });

  let mailDetails = {
    from: "pacientes@doctorapamelaperez.com",
    to: email,
    cc: "pacientes@doctorapamelaperez.com",
    subject: "Contacto desde la web",
    text: `Nombre: ${name}\nCorreo: ${email}\nTelefono: ${phone}\nMensaje: ${message}`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
      res.status(500).send({ error: err.message }); // Enviar solo el mensaje de error
    } else {
      console.log("Email sent successfully");
      res.status(200).send({ message: "Email sent successfully" }); // Enviar un mensaje de éxito
    }
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
