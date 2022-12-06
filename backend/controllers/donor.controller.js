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
const donorservice=require('../services/donor.service')


const CreateDonor= async (req, res) => {

    user = await User.findOne({ email: req.body.email });
    if (user) {
        res.send(
            "User already exists"
        );
        return;


    }
    else {
      donorservice.CreateDonorService(req,res);

    }
}





const GetDonor= async (req, res) => {
    try {
        donorservice.GetDonorService(req,res)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const EditDonor= async (req, res) => {
    user = await User.findOne({ email: req.body.email });

    if (user) {
        donorservice.EditDonorService(req,res)
    }
    else {
        res.status(400).send("User not found in Database");

    }


}
   


const DeleteDonor= async (req, res) => {

    try {
        donorservice.DeleteDonorService(req,res)
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}


module.exports = {
    CreateDonor,
    GetDonor,
    EditDonor,
    DeleteDonor,


};