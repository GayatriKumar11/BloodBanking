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
var drivecontroller= require('../controllers/drive.controller')


router.post('/drive/create',drivecontroller.CreateDrive)

router.get('/drive/getAll', drivecontroller.GetDrive)

router.put('/drive/edit', drivecontroller.EditDrive)

router.delete('/drive/delete/:zipcode', drivecontroller.DeleteDrive )




module.exports = router;