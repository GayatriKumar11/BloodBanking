var express = require('express');
var router = express.Router();
var app = express();
var Drive = require('../model/drive.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const { ObjectId } = require("mongoose").Types;

router.post('/drive/create/:id', async (req, res) => {
    var id=req.params.id;
    var name = req.body.name;
    var address = req.body.address;
    var zipcode = req.body.zipcode;

    // if (name == "" && email == "" && password1 == "" && bloodgroup == "" && phonenumber == "") {
    //     res.send(
    //         "Please enter Full Name, email, password, blood group and phonenumber"
    //     );
    //     return;

    // }
    // if (name == "" && email == "" ) {

    //     res.send(
    //         "Please enter Full Name and email"
    //     );
    //     return;

    // }
    // if (name == "" && password1 == "") {

    //     res.send(
    //         "Please enter Full Name and password"
    //     );

    //     return;
    // }
    // if (email == "" && password1 == "") {

    //     res.send(
    //         "Please enter email and password"
    //     );
    //     return;

    // }
    // if (name == "") {
    //     res.send(
    //         "Please enter Full Name"
    //     );
    //     return;

    // }
    // if (name.length > 10) {
    //     res.send(
    //         "Please enter name less than 10 characters"
    //     );
    //     return;
    // }
    // if (name.match(/(?=.*\d)/)) {
    //     res.send(
    //         "Please enter name without digits"
    //     );
    //     return;
    // }
    // if (email == "") {
    //     (res.send(
    //         "Please enter E-mail"
    //     ));

    //     return;

    // }
    // else {

    //     if (!email.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)) {
    //         res.send(
    //             "Please enter valid mail"
    //         );

    //         return;

    //     }

    // }
    // if (password1 == "") {
    //     res.send(
    //         "Please enter password"
    //     );

    //     return;

    // }
    // else {
    //     if (!password1.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/)) {

    //         res.send(
    //             "Please enter password that contains lowercases, uppercases, digits and special characters and minimum 8 characters "
    //         );

    //         return;

    //     }
    //     else {

    //         if (bloodgroup == "") {
    //             res.send("Please enter bloodgroup");
    //             return;
    //         }

    //         else {

    //             if (phonenumber == "") {
    //                 res.send("Please enter phonenumber")
    //             }
    //             else {

                    drive = await Drive.findOne({ id: req.params.id });
                    if (drive) {
                        res.send(
                            "Drive already exists"
                        );
                        return;


                    }
                    else {
                        let drive = new Drive({
                            id:req.params.id,
                            name: req.body.name,
                            address: req.body.address,
                            zipcode: req.body.zipcode,

                        });

                        Drive.addDrive(drive, (err, result) => {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                res.send(user);
                            }
                        });

                    }
                }
//             }

//         }

//     }

// }
)





router.get('/drive/getAll', async (req, res) => {
    try {
        const data = await Drive.find();
        res.send(data)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
})


router.put('/drive/edit/:id', async (req, res) => {
    // if (name == "" && email == "" && password1 == "" && bloodgroup == "" && phonenumber == "") {
    //     res.send(
    //         "Please enter Full Name, email, password, blood group and phonenumber"
    //     );
    //     return;

    // }
    // if (name == "" && email == "" ) {

    //     res.send(
    //         "Please enter Full Name and email"
    //     );
    //     return;

    // }
    // if (name == "" && password1 == "") {

    //     res.send(
    //         "Please enter Full Name and password"
    //     );

    //     return;
    // }
    // if (email == "" && password1 == "") {

    //     res.send(
    //         "Please enter email and password"
    //     );
    //     return;

    // }
    // if (name == "") {
    //     res.send(
    //         "Please enter Full Name"
    //     );
    //     return;

    // }
    // if (name.length > 10) {
    //     res.send(
    //         "Please enter name less than 10 characters"
    //     );
    //     return;
    // }
    // if (name.match(/(?=.*\d)/)) {
    //     res.send(
    //         "Please enter name without digits"
    //     );
    //     return;
    // }
    // if (email == "") {
    //     (res.send(
    //         "Please enter E-mail"
    //     ));

    //     return;

    // }
    // else {

    //     if (!email.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)) {
    //         res.send(
    //             "Please enter valid mail"
    //         );

    //         return;

    //     }

    // }
    // if (password1 == "") {
    //     res.send(
    //         "Please enter password"
    //     );

    //     return;

    // }
    // else {
    //     if (!password1.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/)) {

    //         res.send(
    //             "Please enter password that contains lowercases, uppercases, digits and special characters and minimum 8 characters "
    //         );

    //         return;

    //     }
    //     else {

    //         if (bloodgroup == "") {
    //             res.send("Please enter bloodgroup");
    //             return;
    //         }

    //         else {

    //             if (phonenumber == "") {
    //                 res.send("Please enter phonenumber")
    //             }
    //             else {

                        drive= await Drive.findOne({id: req.params.id});
            
                        if(user)
                        {
                            const id=req.params.id;
                            const name = req.body.name;
                            const address= req.body.address;
                            const zipcode = req.body.zipcode;
                            const salt = await bcrypt.genSalt(10);
                            const password1= await bcrypt.hash(password, salt);
                            const options = { new: true };
                            const result = await User.findOneAndUpdate({id:id},{name : name , address: address, zipcode:zipcode},options);
                            res.send(result);
                            return;
                        }
                        else{
                            res.status(400).send("Drive not found in Database");
                            
                        }
        
    
                    }
//             }
//         }
//     }
// }
            
)


router.delete('/drive/delete/:id', async (req, res) => {
    var id = req.params.id;
    // if (email == "") {
    //     (res.send(
    //         "Please enter E-mail"
    //     ));

    //     return;

    // }
    // else {

    //     if (!email.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)) {
    //         res.send(
    //             "Please enter valid mail"
    //         );

    //         return;

    //     }

    // }
    try {
        const id = req.params.id;
        //const data = await User.findById(id)

        drive = await Drive.findOne({ id: req.params.id });
        if (drive) {
            drive.delete(id)
            return res.send(drive)
        }
        else {
            res.status(404).send(
                "Cannot delete as email id doesn't exist in database"
            );
            return;
        }
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
})
