var mongoose = require('mongoose');
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');

var messageRoute = require('./routes/message.routes');
var pickupRoute = require('./routes/pickup.routes');
var bloodbankRoute = require('./routes/bloodbank.routes');


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
app.use(messageRoute);
app.use(pickupRoute);
app.use(bloodbankRoute);
app.use(express.json());

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});