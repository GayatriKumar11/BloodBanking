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
var appointmentcontroller= require('../controllers/appointment.controller')

router.post('/appointment/create', appointmentcontroller.CreateAppointment)

router.get('/appointment/getAll', appointmentcontroller.getAppointment)

router.get('/appointment/get', appointmentcontroller.getAppointmentbyone)

router.put('/appointment/edit', appointmentcontroller.EditAppointmenmt)


router.delete('/appointment/delete',appointmentcontroller.DeleteAppiontment)

module.exports = router;