var mongoose = require('mongoose');

var pickupSchema = mongoose.Schema({
    bloodCentrename:{
        type: String,
        required: true,
       
    },
    recieverName:{
        type: String,
        required: true,
       
    },
    dateOfPickup:{
        type: String,
        required: true

    },
    bloodType: {
        type: String,
        required: true,
    }
});

var Pickup = mongoose.model('Pickup', pickupSchema);
// save user to database

Pickup.addPickup = function (pickup, callback) {


    pickup.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'Pickup added');
        }
    })


}


module.exports = Pickup;