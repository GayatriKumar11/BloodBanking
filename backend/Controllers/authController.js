const jwt = require('jsonwebtoken')
const _ = require("lodash");
const { sendEmail } = require("../helpers");
require('dotenv').config()
const expressJwt = require('express-jwt');
const User =  require('../Models/userLogin')
const Hospital =  require('../Models/hospitalLogin')
const Admin = require('../Models/adminLogin')

exports.signup =  async (req, res) => {
    const userExists =  await User.findOne({email: req.body.email});
    if(userExists) return res.status(403).json({
        error: 'Email has already been taken'
    });
     const user = await new User(req.body);
     user.save();
     res.status(200).json({
        // user: user
        message: "User created successfuly. PLease login."
    })
   
};

exports.hospitalSignup =  async (req, res) => {
    const hospitalExists =  await Hospital.findOne({hospitalEmail: req.body.hospitalEmail});
    if(hospitalExists) return res.status(403).json({
        error: 'Email has already been taken'
    });
     const hospital = await new Hospital(req.body);
     hospital.save();
     res.status(200).json({
        //hospital: hospital
         message: "Hospital user created successfuly. Please login."
    })
   
};


exports.signin = (req, res) => {
    //find the user based on email
     const {_id, email, password} = req.body 
     User.findOne({email}, (err, user) => {
        //if err or not user
        if(err || !user){
            return res.status(401).json({
                error: "User with this email does not exist. Please signup."
            })
        }
        //if user is found make sure the email and passwor match.
        //create authenticate method in model and use here.
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password do not match'
            })
        }
         //if no user, handle error

        //if user found, authenticate

        //generate a token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
        //persist token as 't' in cookie with expiry date
        res.cookie('t', token, {expire: new Date() + 9999})
        //return response with user and token to front client:
        const {_id, name, email} = user
        return res.json({token, user:{_id, name, email}})
     })
}

exports.hospitalSignin = (req, res) => {
    //find the user based on email
     const {_id, hospitalEmail, password} = req.body 
     Hospital.findOne({hospitalEmail}, (err, hospital) => {
        //if err or not user
        if(err || !hospital){
            return res.status(401).json({
                error: "Hospital/Clinic with this email does not exist. Please signup."
            })
        }
        //if user is found make sure the email and passwor match.
        //create authenticate method in model and use here.
        if(!hospital.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password do not match'
            })
        }

        //generate a token with user id and secret
        const token = jwt.sign({_id: hospital._id}, process.env.JWT_SECRET)
        //persist token as 't' in cookie with expiry date
        res.cookie('t', token, {expire: new Date() + 9999})
        //return response with user and token to front client:
        const {_id, hospitalName, hospitalEmail} = hospital
        return res.json({token, hospital:{_id, hospitalName, hospitalEmail}})
     })
}

exports.adminSignup =  async (req, res) => {
    const adminExists =  await Admin.findOne({adminEmail: req.body.adminEmail});
    if(adminExists) return res.status(403).json({
        error: 'Email has already been taken'
    });
     const admin = await new Admin(req.body);
     admin.save();
     res.status(200).json({
        //hospital: hospital
         message: "Admin created successfuly. Please login."
    })
   
};

exports.adminSignin = (req, res) => {
    //find the user based on email
     const {_id, adminEmail, password} = req.body 
     Admin.findOne({adminEmail}, (err, admin) => {
        //if err or not user
        if(err || !admin){
            return res.status(401).json({
                error: "Admin with this email does not exist. Please signup."
            })
        }
        //if user is found make sure the email and passwor match.
        //create authenticate method in model and use here.
        if(!admin.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password do not match'
            })
        }

        //generate a token with user id and secret
        const token = jwt.sign({_id: admin._id}, process.env.JWT_SECRET)
        //persist token as 't' in cookie with expiry date
        res.cookie('t', token, {expire: new Date() + 9999})
        //return response with user and token to front client:
        const {_id, adminName, adminEmail} = admin
        return res.json({token, admin:{_id, adminName, adminEmail}})
     })
}

exports.signout = (req, res) => {
    res.clearCookie('t')
    return res.json({ message: "User/Hospital has been logged out successfuly"})
}

exports.requireSignin = expressJwt({
    //if the token is valid, express-jwt appends the verifieds users id
    //in an auth key to the request object
    secret: process.env.JWT_SECRET,
    userProperty: 'auth'
})

exports.requireHospitalSignin = expressJwt({
    //if the token is valid, express-jwt appends the verifieds users id
    //in an auth key to the request object
    secret: process.env.JWT_SECRET,
    userProperty: "auth" //should be hospitalProperty, but didn't work
})

// add forgotPassword and resetPassword methods
exports.forgotPassword = (req, res) => {
    if (!req.body) return res.status(400).json({ message: "No request body" });
    if (!req.body.email)
        return res.status(400).json({ message: "No Email in request body" });
 
    console.log("forgot password finding user with that email");
    const { email } = req.body;
    console.log("signin req.body", email);
    // find the user based on email
    User.findOne({ email }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "User with that email does not exist!"
            });
 
        // generate a token with user id and secret
        const token = jwt.sign(
            { _id: user._id, iss: "NODEAPI" },
            process.env.JWT_SECRET
        );
 
        // email data
        const emailData = {
            from: "noreply@node-react.com",
            to: email,
            subject: "Password Reset Instructions",
            text: `Please use the following link to reset your password: ${
                process.env.CLIENT_URL
            }/reset-password/${token}`,
            html: `<p>Please use the following link to reset your password:</p> <p>${
                process.env.CLIENT_URL
            }/reset-password/${token}</p>`
        };
 
        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                return res.json({ message: err });
            } else {
                sendEmail(emailData);
                return res.status(200).json({
                    message: `Email has been sent to ${email}. Follow the instructions to reset your password.`
                });
            }
        });
    });
};
 
// to allow user to reset password
// first you will find the user in the database with user's resetPasswordLink
// user model's resetPasswordLink's value must match the token
// if the user's resetPasswordLink(token) matches the incoming req.body.resetPasswordLink(token)
// then we got the right user
 
exports.resetPassword = (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;
 
    User.findOne({ resetPasswordLink }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "Invalid Link!"
            });
 
        const updatedFields = {
            password: newPassword,
            resetPasswordLink: ""
        };
 
        user = _.extend(user, updatedFields);
        user.updated = Date.now();
 
        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json({
                message: `Great! Now you can login with your new password.`
            });
        });
    });
};