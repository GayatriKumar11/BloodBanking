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

const CreateInventoryService= async (req, res) => {
  
   
        let inventory = new Inventory({
            //id:req.params.id,
            hospitalname: req.body.hospitalname,
            address: req.body.address,
            zipcode: req.body.zipcode,
            bloodgroup: req.body.bloodgroup

        });

        Inventory.addInventory(inventory, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(inventory);
            }
        });

    }



const GetInventoryService=async (req, res) => {
   
        const data = await Inventory.find();
        res.send(data)
 
}

const EditInventoryService=async (req, res) => {


        const zipcode = req.body.zipcode;
        const bloodgroup = req.body.bloodgroup;
        const options = { new: true };
        const result = await Inventory.findOneAndUpdate({ zipcode: zipcode }, { bloodgroup: bloodgroup }, options);
        res.send(result);
        return;

}

const DeleteInventoryService= async (req, res) => {

        var zipcode = req.params.zipcode;

        inventory = await Inventory.findOne({ zipcode: req.params.zipcode });
        if (inventory) {
            inventory.delete(zipcode)
            return res.send(inventory);

        }
        else {
            res.status(404).send(
                "Cannot delete as zipcode doesn't exist in database"
            );
            return;
        }
   
}

module.exports = {
    CreateInventoryService,
    GetInventoryService,
    EditInventoryService,
    DeleteInventoryService,


};