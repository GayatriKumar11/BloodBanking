const express = require('express');
const router = express.Router();

const {userSignUpValidator, hospitalSignUpValidator, adminSignUpValidator, passwordResetValidator} =  require('../Validators/index')
const {signup, signin, signout, hospitalSignup, hospitalSignin, adminSignup, adminSignin, forgotPassword,resetPassword} = require('../Controllers/authController')

router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);


router.post('/signup', userSignUpValidator, signup);
router.post('/hospital-signup', hospitalSignUpValidator, hospitalSignup);
router.post('/admin-signup', adminSignUpValidator, adminSignup);
router.post('/signin', signin);
router.post('/hospital-signin', hospitalSignin);
router.post('/admin-signin', adminSignin);
router.get('/signout', signout);

module.exports = router;