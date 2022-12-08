var express = require('express');
var router = express.Router();
var app = express();
const messageController = require('../controllers/MessageController');


router.post('/message/create', messageController.createMessage);
router.get('/message/getAll', messageController.getAllMessages);

module.exports = router;