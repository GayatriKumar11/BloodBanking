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
const driveservice = require('../services/drive.service')

const CreateDrive= async (req, res) => {

    drive = await Drive.findOne({ zipcode: req.body.zipcode });
    if (drive) {
        res.status(409).send(
            "Drive already exists"
        );
        return;


    }
    else {
        driveservice.CreateDriveService(req,res);
       
    }
}


const GetDrive=async (req, res) => {
    try {
        driveservice.GetDriveService(req,res);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const EditDrive= async (req, res) => {

    drive = await Drive.findOne({ zipcode: req.body.zipcode });

    if (drive) {
        driveservice.EditDriveService(req,res);
    }
    else {
        res.status(400).send("Drive not found in Database");

    }


}

const DeleteDrive= async (req, res) => {
    try {
        driveservice.DeleteDriveService(req,res);
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
module.exports = {
    CreateDrive,
    GetDrive,
    EditDrive,
    DeleteDrive,


};