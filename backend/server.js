var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');

//var config = require('./config');
var donorRoute = require('./routes/donor.routes')
var driveRoute = require('./routes/drive.routes')
var bloodbankRoute = require('./routes/bloodbank.routes')
var inventoryRoute = require('./routes/inventory.routes')
var appointmentRoute = require('./routes/appointment.routes')


var dbUrl="mongodb+srv://saranya:Abcd%4012345@cluster.mpjxo80.mongodb.net/BloodDonation"
// connect to mongoDB 
mongoose.connect(dbUrl);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

var port = 8080;
var app = express();
app.use(cors());

// add middleware 
app.use(bodyParser.json());
app.use(donorRoute);
app.use(driveRoute);
app.use(bloodbankRoute);
app.use(inventoryRoute);
app.use(appointmentRoute);
app.use(express.json());

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});