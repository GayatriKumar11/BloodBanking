var express = require('express');
var router = express.Router();
var bloodbankcontroller= require('../Controllers/bloodbank.controller')

router.post('/bloodbank/create', bloodbankcontroller.CreateBloodbank)
router.get('/bloodbank/getAll', bloodbankcontroller.getBloodBank)
router.put('/bloodbank/edit', bloodbankcontroller.EditBloodBank)
router.delete('/bloodbank/delete/:zipcode',bloodbankcontroller.DeleteBloodBank)

module.exports = router;