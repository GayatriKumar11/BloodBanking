const express = require("express");
const router = express.Router();
const { requireHospitalSignin } = require("../controllers/authController");
const {
     hospitalById,
     allHospitals,
     getHospital,
     updateHospital,
     deleteHospital
} = require("../controllers/hospitalController");



router.get('/hospitals', allHospitals);
router.get('/hospital/:hospitalId', getHospital);
router.put('/hospital/:hospitalId', requireHospitalSignin ,  updateHospital);
router.delete('/hospital/:hospitalId', requireHospitalSignin, deleteHospital);

// any route containing :userId, our app will first execute userByID()
router.param("hospitalId", hospitalById);




module.exports = router;