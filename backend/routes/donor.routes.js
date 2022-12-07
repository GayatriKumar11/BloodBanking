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
var donorcontroller= require('../controllers/donor.controller')


router.post('/user/create', donorcontroller.CreateDonor)

router.get('/user/getAll', donorcontroller.GetDonor)

router.put('/user/edit', donorcontroller.EditDonor)

router.put('/user/editphonenumber', donorcontroller.EditDonorbyphonenumber)

router.put('/user/editpassword', donorcontroller.EditDonorbypassword)

router.delete('/user/delete', donorcontroller.DeleteDonor)


module.exports = router;