const path = require("path");
const express = require("express");

const app = express();
const cors = require("cors");

const PORT = 5000;

const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json()); // req.body

// view engine setup
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  // server static content.
  // npm run build.
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
    console.log(req.body);
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
    const transporter = await nodemailer.createTransport({
      host: "send.one.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "contact@rajaumersaghir.com", // generated ethereal user
        pass: "Random001", // generated ethereal password
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "`Email from rajaumersaghir.com account` <contact@rajaumersaghir.com>", // sender address
      to: "umer.saghir@live.com", // list of receivers
      subject: "New message from rajaumersaghir.com", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>${sentData}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "front-end/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
