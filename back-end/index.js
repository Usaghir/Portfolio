const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //req.body

//view engine setup
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  //serve static content
  app.use(express.static(path.join(__dirname, "front-end/build")));
}

app.get("/api/form", async (req, res) => {
  try {
    res.send("hello");
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/api/send", async (req, res) => {
  try {
    //console.log(req.body);
    res.send("hello");

    const sentData = `
      <h3>Sender Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Email from ${process.env.EMAIL_USER} account" <${process.env.EMAIL_USER}>`, // sender address
      to: "rajaumersaghir@toptechsol.com", // list of receivers
      subject: "New message from rajaumersaghir.com", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>${sentData}</b>`, // html body
    });

    //console.log("Message sent: %s", info.messageId);
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "front-end/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, () => {
  //(`server has started on port ${PORT}`);
});
