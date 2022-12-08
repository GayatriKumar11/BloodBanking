var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    name:{
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
    date: {
        type: String,
        required: true,

    }
});

var Drive = mongoose.model('Drive', userSchema);
// save user to database

Drive.addDrive = function (drive, callback) {


    drive.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'drive added');
        }
    })


}


module.exports = Drive;