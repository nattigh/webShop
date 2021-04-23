const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 3002;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/sendMail", async (req, res) => {
  const {
    firstName,
    // lastName,
    email,
    country,
    city,
    address,
    // bag,
    trackingNumber,
    estimatedArrival,
  } = req.body;
  /*
  console.log(req);
  body: {
    firstName: 'Attila',
    lastName: 'Nagy',
    email: 'n_atti11@yahoo.com',
    country: 'Faroe Islands',
    city: 'Saltangara',
    address: 'Petru Dobra nr 10, ap 10',
    bag: { '0': [Object] },
    trackingNumber: 9901588840,
    estimatedArrival: '2021/04/25'
  },
*/

  const transporter = nodemailer.createTransport({
    service: "gmail",
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: "project.test.acc92@gmail.com",
      pass: "runtest92",
    },
  });
  const mailOptions = {
    from: '"React Webshop" <project.test.acc92@gmail.com>',
    to: email,
    subject: "Details about your recent purchase",
    text: `Your order has been placed ${firstName}

Address: ${country} ${city} ${address}
Delivery estimated on: ${estimatedArrival}
Tracking number: ${trackingNumber}

Thank you for shopping with us!`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

//console.log("eljut ide");
app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
