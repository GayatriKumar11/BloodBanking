var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
       
    },
    subject: {
        type: String,
        required: true,

    },
    msg: {
        type: String,
        required: true,

    }
});

var Message = mongoose.model('Message', messageSchema);

Message.addMessage = function( message, callback) {
    message.save( (err,result) => {
        if(err) {
            callback(err);
        } else {
            callback(null, "Message sent");
        }
    })
}

module.exports = Message;