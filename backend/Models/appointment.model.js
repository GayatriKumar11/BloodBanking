var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    bloodbankname:{
        type: String,
        required: true,
       
    },
    fullname:{
        type: String,
        required: true,
       
    },
    date:{
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique:true
    }
});

var Appointment = mongoose.model('appointment', userSchema);
// save user to database

Appointment.addAppointment = function (appointment, callback) {


    appointment.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'Appointment added');
        }
    })


}


module.exports = Appointment;