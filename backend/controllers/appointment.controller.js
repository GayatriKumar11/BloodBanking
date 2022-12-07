var express = require('express');
var router = express.Router();
var app = express();
var User = require('../model/donor.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Inventory = require('../model/inventory.model');
var Drive = require('../model/drive.model');
const Appointment = require('../model/appointment.model');
const { ObjectId } = require("mongoose").Types;
const appointmentservice=require('../services/appointment.service')

const CreateAppointment=async (req, res) => {

    appointment = await Appointment.findOne({ email: req.body.email });
    if (appointment) {
        res.status(409).send(
            "Appointment already exists"
        );
        return;


    }
    else {
        appointmentservice.Createappointmemntservice(req,res);
    }
}

const getAppointment= async (req, res) => {
    try {
        appointmentservice.getappointmentService(req,res);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getAppointmentbyone= async (req, res) => {
    try {
        appointmentservice.getappointmentServicebyone(req,res);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const EditAppointmenmt=async (req, res) => {
 
    appointment = await Appointment.findOne({ email: req.body.email });

    if (appointment) {
        appointmentservice.EditappointmentService(req,res);
    }
    else {
        res.status(400).send("Email not found in Database");

    }


}

const DeleteAppiontment= async (req, res) => {
   
    try {
        appointmentservice.DeleteappointmentService(req,res);
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
module.exports = {
    CreateAppointment,
    getAppointment,
    EditAppointmenmt,
    DeleteAppiontment,
    getAppointmentbyone


};