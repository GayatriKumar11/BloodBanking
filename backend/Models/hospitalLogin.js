const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const hospitalSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    hospitalEmail: {
        type: String,
        trim: true,
        required: true
    },
    personName: {
        type: String,
        trim: true,
        required: true
    },
    personEmail: {
        type: String,
        trim: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    role: {
        type: String,
        default: "subscriber"
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink: {
        data: String,
        default: ""
    }
  
});

/**
 * Virtual fields are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * Keep in mind: virtual properties (password) don’t get persisted in the database.
 * They only exist logically and are not written to the document’s collection.
 */

// virtual field
hospitalSchema
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

// methods
hospitalSchema.methods = {
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

module.exports = mongoose.model('Hospital', hospitalSchema);
