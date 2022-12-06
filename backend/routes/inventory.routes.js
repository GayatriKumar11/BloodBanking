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
var inventorycontroller= require('../controllers/inventory.controller')


router.post('/inventory/create',inventorycontroller. CreateInventory)

router.get('/inventory/getAll', inventorycontroller.GetInventory)

router.put('/inventory/edit', inventorycontroller.EditInventory)

router.delete('/inventory/delete/:zipcode', inventorycontroller.DeleteInventory)


module.exports = router;