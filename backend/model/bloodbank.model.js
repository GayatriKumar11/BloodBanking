var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    bloodbankname:{
        type: String,
        required: true,
       
    },
    address: {
        type: String,
        required: true,
       
    },
    zipcode: {
        type: String,
        required: true,
        unique:true

    },
    bloodgroup: {
        type: String,
        required: true,

    },
    quantity: {
        type: Number,
        required: true,

    }
});

var Bloodbank = mongoose.model('bloodbank', userSchema);
// save user to database

Bloodbank.addBloodbank = function (bloodbank, callback) {


    bloodbank.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'bloodbank added');
        }
    })


}


module.exports = Bloodbank;