var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({

    hospitalname: {
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
    }
});

var Inventory = mongoose.model('Inventory', userSchema);
// save user to database

Inventory.addInventory = function (inventory, callback) {


    inventory.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'inventory added');
        }
    })


}


module.exports = Inventory;