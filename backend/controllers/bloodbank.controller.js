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
const bloodbankservice=require('../services/bloodbank.service')

const CreateBloodbank=async (req, res) => {

    bloodbank = await Bloodbank.findOne({ zipcode: req.body.zipcode });
    if (bloodbank) {
        res.status(409).send(
            "Bloodbank already exists"
        );
        return;


    }
    else {
        bloodbankservice.Createbloodbankservice(req,res)
    }
}

const getBloodBank= async (req, res) => {
    try {
        bloodbankservice.getBloodbankService(req,res);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const EditBloodBank=async (req, res) => {
 
    bloodbank = await Bloodbank.findOne({ zipcode: req.body.zipcode });

    if (bloodbank) {
        bloodbankservice.EditBloodBankService(req,res);
    }
    else {
        res.status(400).send("Bloodbank not found in Database");

    }


}

const DeleteBloodBank= async (req, res) => {
   
    try {
        bloodbankservice.DeleteBloodBankService(req,res);
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
module.exports = {
    CreateBloodbank,
    getBloodBank,
    EditBloodBank,
    DeleteBloodBank,


};