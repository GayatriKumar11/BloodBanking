var express = require('express');
var router = express.Router();
var app = express();
const pickupController = require('../controllers/pickup.controller');


router.post('/pickup/create', pickupController.createPickup);

module.exports = router;