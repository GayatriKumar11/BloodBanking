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

const CreateDriveService= async (req, res) => {

        let drive = new Drive({
            name: req.body.name,
            address: req.body.address,
            zipcode: req.body.zipcode,
            date: req.body.date

        });

        Drive.addDrive(drive, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(drive);
            }
        });

    }


const GetDriveService=async (req, res) => {
  
        const data = await Drive.find();
        res.send(data)
   
}


const EditDriveService= async (req, res) => {

        const name = req.body.name;
        const address = req.body.address;
        const zipcode = req.body.zipcode;
        const date = req.body.date;
        const options = { new: true };
        const result = await Drive.findOneAndUpdate({ zipcode: zipcode }, { name: name, address: address, date: date }, options);
        res.send(result);
        return;

}



const DeleteDriveService= async (req, res) => {
 
        const zipcode = req.params.zipcode;
        drive = await Drive.findOne({ zipcode: req.params.zipcode });
        if (drive) {
            drive.delete(zipcode)
            return res.send(drive)
        }
        else {
            res.status(404).send(
                "Cannot delete as drive data doesn't exist in database"
            );
            return;
        }

}

module.exports = {
    CreateDriveService,
    GetDriveService,
    EditDriveService,
    DeleteDriveService,


};