const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const express = require('express')
const user = require('../Models/userLogin')

const defaultEmailData = { from: "noreply@node-react.com" };

exports.sendEmail = ((req, res) => {
  console.log(req.body);
  const output = `
    <p>You have a new Contact request</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
  `;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gohilyukta1@gmail.com",
      pass: "bezpilvswmbajvok"
    },
    tls: {
      rejectUnauthorized:false
    }
});

let receiver = "yuktabag@gmail.com"
//let receiver = user.email

let mailOptions = {
  from: 'gohilyukta1@gmail.com', // sender address
  to: receiver, // list of receivers
  subject: 'Contact from Blood Donation Finder', // Subject line
  text: 'Hello world?', // plain text body
  html: output // html body
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 return res.redirect('/')
});
