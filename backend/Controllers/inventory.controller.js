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
const InventoryService = require('../services/inventory.service')

const CreateInventory=async (req, res) => {
  
    inventory = await Inventory.findOne({ zipcode: req.body.zipcode });
    if (inventory) {
        res.status(409).send(
            "inventory already exists"
        );
        return;


    }
    else {
        InventoryService.CreateInventoryService(req,res);
       
    }
}



const GetInventory= async (req, res) => {
    try {
        InventoryService.GetInventoryService(req,res);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const EditInventory= async (req, res) => {
    inventory = await Inventory.findOne({ zipcode: req.body.zipcode });

    if (inventory) {

        InventoryService.EditInventoryService(req,res);
   
    }
    else {
        res.status(400).send("User not found in Database");

    }


}



const DeleteInventory=async (req, res) => {

    try {
        
        InventoryService.DeleteInventoryService(req,res);
       
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
module.exports = {
    CreateInventory,
    GetInventory,
    EditInventory,
    DeleteInventory,


};