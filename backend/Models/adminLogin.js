const Joi = require('joi');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    adminEmail: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    salt: String,
});

adminSchema
    .virtual("password")
    .set(function(password) {
        // create temporary variable called _password
        this._password = password;
        // generate a timestamp
        this.salt = uuidv1();
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

adminSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

module.exports = mongoose.model('Admin', adminSchema);

