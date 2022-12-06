var express = require('express');
var router = express.Router();
var app = express();
var User = require('../model/donor.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Inventory = require('../model/inventory.model');
var Drive = require('../model/drive.model');
const Bloodbank = require('../model/bloodbank.model');
const { ObjectId } = require("mongoose").Types;
var bloodbankcontroller= require('../controllers/bloodbank.controller')

router.post('/bloodbank/create', bloodbankcontroller.CreateBloodbank)

router.get('/bloodbank/getAll', bloodbankcontroller.getBloodBank)


router.put('/bloodbank/edit', bloodbankcontroller.EditBloodBank)


router.delete('/bloodbank/delete/:zipcode',bloodbankcontroller.DeleteBloodBank)

module.exports = router;