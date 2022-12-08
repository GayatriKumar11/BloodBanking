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

const CreateDonorService= async (req, res) => {


        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            bloodgroup: req.body.bloodgroup,
            phonenumber: req.body.phonenumber

        });

        User.addUser(user, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(user);
            }
        });

    }




const GetDonorService= async (req, res) => {

        const data = await User.find();
        res.send(data)
   
}


const EditDonorService= async (req, res) => {

        const name = req.body.name;
        const password = req.body.password;
        const bloodgroup = req.body.bloodgroup;
        const phonenumber = req.body.phonenumber;
        const email = req.body.email;
        const salt = await bcrypt.genSalt(10);
        const password1 = await bcrypt.hash(password, salt);
        const options = { new: true };
        const result = await User.findOneAndUpdate({ email: email }, { name: name, password: password1, bloodgroup: bloodgroup, phonenumber: phonenumber }, options);
        res.send(result);
        return;
    }

   
    const EditDonorServicePhonenumber= async (req, res) => {

        const phonenumber = req.body.phonenumber;
        const email = req.body.email;
        const options = { new: true };
        const result = await User.findOneAndUpdate({ email: email }, { phonenumber: phonenumber }, options);
        res.send(result);
        return;
    }


    const EditDonorServicePassword= async (req, res) => {

        const password = req.body.password;
        const email = req.body.email;
        const salt = await bcrypt.genSalt(10);
        const password1 = await bcrypt.hash(password, salt);
        const options = { new: true };
        const result = await User.findOneAndUpdate({ email: email }, { password: password1 }, options);
        res.send(result);
        return;
    }

const DeleteDonorService= async (req, res) => {

        const email = req.body.email;
        user = await User.findOne({ email: req.body.email });
        if (user) {
            user.delete(email)
            return res.send(user)
        }
        else {
            res.status(404).send(
                "Cannot delete as email id doesn't exist in database"
            );
            return;
        }

}

module.exports = {
    CreateDonorService,
    GetDonorService,
    EditDonorService,
    DeleteDonorService,
    EditDonorServicePhonenumber,
    EditDonorServicePassword

};