var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
const Bloodbank = require('../model/bloodbank.model');
const { ObjectId } = require("mongoose").Types;

const Createbloodbankservice = async (req, res) => {

    let bloodbank = new Bloodbank({
        bloodbankname: req.body.bloodbankname,
        address: req.body.address,
        zipcode: req.body.zipcode,
        bloodgroup: req.body.bloodgroup,
        quantity: req.body.quantity

    });

    Bloodbank.addBloodbank(bloodbank, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(bloodbank);
        }
    });

}





const getBloodbankService=async (req, res) => {
   
        const data = await Bloodbank.find();
        res.send(data)

}


const EditBloodBankService= async (req, res) => {

        const bloodbankname = req.body.bloodbankname;
        const address = req.body.address;
        const zipcode = req.body.zipcode;
        const bloodgroup = req.body.bloodgroup;
        const quantity = req.body.quantity;
        const options = { new: true };
        const result = await Bloodbank.findOneAndUpdate({ zipcode: zipcode }, { bloodbankname: bloodbankname, address: address, bloodgroup: bloodgroup, quantity: quantity }, options);
        res.send(result);
        return;
    }


const DeleteBloodBankService= async (req, res) => {

        const zipcode = req.params.zipcode;
        bloodbank = await Bloodbank.findOne({ zipcode: req.params.zipcode });
        if (bloodbank) {
            bloodbank.delete(zipcode)
            return res.send(bloodbank)
        }
        else {
            res.status(404).send(
                "Cannot delete as blood bank data doesn't exist in database"
            );
            return;
        }
  
}
module.exports = {
    Createbloodbankservice,
    getBloodbankService,
    EditBloodBankService,
    DeleteBloodBankService,


};

