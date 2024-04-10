const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const moment = require("moment-timezone");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pamela_booking",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

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
      res.status(500).send({ error: err.message });
    } else {
      console.log("Email sent successfully");
      res.status(200).send({ message: "Email sent successfully" });
    }
  });
});

app.post("/booking", async (req, res) => {
  let { name, email, phone, date } = req.body;
  const dateInCalifornia = moment(date)
    .tz("America/Los_Angeles")
    .format("YYYY-MM-DD HH:mm:ss");
  let query =
    "INSERT INTO information (name, email, phone, date) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, phone, date], async (error, results) => {
    if (error) throw error;
    res.json("Datos del formulario almacenados");

    let transporter = nodemailer.createTransport({
      host: "host11.registrar-servers.com",
      port: 465,
      secure: true,
      auth: {
        user: "pacientes@doctorapamelaperez.com",
        pass: "No$eJ0b93",
      },
    });

    let mailOptions = {
      from: "pacientes@doctorapamelaperez.com",
      to: email,
      cc: "pacientes@doctorapamelaperez.com",
      subject: "Contacto desde la web | Agendar Cita",
      text: `Gracias por agendar tu cita con la Dra. Pamela Pérez.\n
      Hemos recibido tu información para la siguiente cita:\n
      Nombre: ${name}\n
      Número de teléfono: ${phone}\n
      Fecha de tu cita: ${dateInCalifornia}\n
      Si tienes alguna pregunta, estamos aquí para ayudarte.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo electrónico: " + error);
      } else {
        console.log("Correo electrónico enviado: " + info.response);
      }
    });
  });
});

app.get("/bookedHours", async (req, res) => {
  let query = "SELECT date FROM information";
  db.query(query, async (error, results) => {
    if (error) throw error;
    const bookedHours = results.map((result) => ({
      date: moment(result.date).format("YYYY-MM-DD"),
      hour: moment(result.date).format("HH:mm:ss"),
    }));
    res.json(bookedHours);
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
