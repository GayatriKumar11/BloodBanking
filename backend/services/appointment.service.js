var express = require('express');
var router = express.Router();
var app = express();
var User = require('../model/donor.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Inventory = require('../model/inventory.model');
var Drive = require('../model/drive.model');
const Appointment = require('../model/appointment.model');
const { options } = require('../routes/donor.routes');
const { ObjectId } = require("mongoose").Types;

const Createappointmemntservice = async (req, res) => {

    let appointment = new Appointment({
        bloodbankname: req.body.bloodbankname,
        fullname: req.body.fullname,
        date: req.body.date,
        email: req.body.email,

    });

    Appointment.addAppointment(appointment, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(appointment);
        }
    });

}





const getappointmentService=async (req, res) => {
   
        const data = await Appointment.find();
        res.send(data)

}

const getappointmentServicebyone=async (req, res) => {
   
    const email=req.body.email;
    const options = { new: true };
    const data = await Appointment.find({email:email});
    res.send(data)

}

const EditappointmentService= async (req, res) => {

    const bloodbankname=req.body.bloodbankname;
    const fullname= req.body.fullname;
    const date=req.body.date;
    const email=req.body.email;
        const options = { new: true };
  
        const result = await Appointment.findOneAndUpdate({ email: email }, { bloodbankname: bloodbankname, fullname : fullname, date: date }, options);
        res.send(result);
        return;
    }


const DeleteappointmentService= async (req, res) => {

    const email = req.body.email;
    appointment = await Appointment.findOne({ email: req.body.email });
    if (appointment) {
        appointment.delete(email)
        return res.send(appointment)
    }
    else {
        res.status(404).send(
            "Cannot delete as email id doesn't exist in database"
        );
        return;
    }
  
}
module.exports = {
    Createappointmemntservice,
    getappointmentService,
    EditappointmentService,
    DeleteappointmentService,
    getappointmentServicebyone


};

