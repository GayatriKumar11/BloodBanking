var Message = require('../Models/message.model');


const createMessage = async (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var msg = req.body.msg;


    let message = new Message({

        name: name,
        email: email,
        subject: subject,
        msg: msg,

    });

    Message.addMessage(message, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

}

const getAllMessages = async (req, res) => {
    try {
        const data = await Message.find();
        res.send(data)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createMessage,
    getAllMessages
}