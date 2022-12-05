var express = require('express');
var router = express.Router();
var app = express();
var User = require('../model/user.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Inventory = require('../model/inventory.model');
var Drive=require('../model/drive.model')
const { ObjectId } = require("mongoose").Types;

router.post('/user/create', async (req, res) => {
    var id=req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var password1 = req.body.password;
    var bloodgroup = req.body.bloodgroup;
    var phonenumber = req.body.phonenumber;
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

                    user = await User.findOne({ email: req.body.email });
                    if (user) {
                        res.send(
                            "User already exists"
                        );
                        return;


                    }
                    else {
                        let user = new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: req.body.password,
                            bloodgroup:req.body.bloodgroup,
                            phonenumber:req.body.phonenumber

                        });

                        User.addUser(user, (err, result) => {
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





router.get('/user/getAll', async (req, res) => {
    try {
        const data = await User.find();
        res.send(data)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
})


router.put('/user/edit', async (req, res) => {
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

                        user= await User.findOne({email: req.body.email});
            
                        if(user)
                        {
                            const name = req.body.name;
                            const password= req.body.password;
                            const bloodgroup = req.body.bloodgroup;
                            const phonenumber = req.body.phonenumber;
                            const email=req.body.email;
                            const salt = await bcrypt.genSalt(10);
                            const password1= await bcrypt.hash(password, salt);
                            const options = { new: true };
                            const result = await User.findOneAndUpdate({email:email},{name : name , password: password1, bloodgroup:bloodgroup, phonenumber: phonenumber},options);
                            res.send(result);
                            return;
                        }
                        else{
                            res.status(400).send("User not found in Database");
                            
                        }
        
    
                    }
//             }
//         }
//     }
// }
            
)


router.delete('/user/delete', async (req, res) => {
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
        const email = req.body.email;
        const id = req.params.id;
        //const data = await User.findById(id)

        user = await User.findOne({ email: req.body.email });
        if (user) {
            user.delete(email)
            return res.send(user)
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


router.post('/inventory/create', async (req, res)=>{
    //var id=req.params.id;
    var hospitalname=req.body.hospitalname;
    var address=req.body.address;
    var zipcode=req.body.zipcode;
    var bloodgroup=req.body.bloodgroup;

    // if(name == "" && email=="" && password1 =="")
    // {
    //     res.send(
    //         "Please enter Full Name and email and password"
    //     );
    //     return;
       
    // }
    // if (name =="" && email== "")
    // {
        
    //     res.send(
    //         "Please enter Full Name and email"
    //     );
    //     return;
       
    // }
    // if (name =="" && password1== "")
    // {
        
    //     res.send(
    //         "Please enter Full Name and password"
    //     );
       
    //     return;
    // }
    // if (email =="" && password1== "")
    // {
        
    //     res.send(
    //         "Please enter email and password"
    //     );
    //     return;

    // }
    // if(name == "")
    // {
    //     res.send(
    //         "Please enter Full Name"
    //     );
    //     return;

    // }
    // if(name.length>10)
    // {
    //     res.send(
    //         "Please enter name less than 10 characters"
    //     );
    //     return;
    // }
    // if(name.match(/(?=.*\d)/))
    // {
    //     res.send(
    //         "Please enter name without digits"
    //     );
    //     return;
    // }
    // if(email == "")
    // {
    //     (res.send(
    //         "Please enter E-mail"
    //     ));

    //     return;

    // }
    // else{
        
    //     if(!email.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)){
    //         res.send(
    //             "Please enter valid mail"
    //         );

    //         return;
 
    //     }

    // }
    // if(password1 == "")
    // {
    //     res.send(
    //     "Please enter password"
    //     );

    //     return;

    // }
    // else{
    //     if(!password1.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/)){

    //         res.send(
    //             "Please enter password that contains lowercases, uppercases, digits and special characters and minimum 8 characters "
    //         );

    //         return;
           
    //     }
    //    else{

                            inventory= await Inventory.findOne({zipcode: req.body.zipcode});
                            if(inventory){
                                res.status(409).send(
                                    "inventory already exists"
                                );
                                return;
                                
                                
                            }
                            else{
                                let inventory = new Inventory({
                                    //id:req.params.id,
                                    hospitalname:req.body.hospitalname,
                                    address: req.body.address,
                                    zipcode: req.body.zipcode,
                                    bloodgroup : req.body.bloodgroup
                             
                                });
                                
                                Inventory.addInventory(inventory, (err, result)=>{
                                    if(err){
                                        res.send(err);
                                    }
                                    else{
                                      res.send(inventory);
                                    }
                                });  
                   
                            }
                        }
                                
            //         }
                        
            // }
)
        

router.get('/inventory/getAll', async (req, res) => {
    try {
        const data = await Inventory.find();
        res.send(data)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
})

router.put('/inventory/edit', async (req, res) => {
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

                        inventory= await Inventory.findOne({zipcode: req.body.zipcode});
            
                        if(inventory)
                        {
                            //const id=req.params.id;
                            const hospitalname = req.body.hospitalname;
                            const address= req.body.address;
                            const zipcode = req.body.zipcode;
                            const bloodgroup = req.body.bloodgroup;
                            const options = { new: true };
                            const result = await Inventory.findOneAndUpdate({zipcode:zipcode},{bloodgroup:bloodgroup},options);
                            res.send(result);
                            return;
                        }
                        else{
                            res.status(400).send("User not found in Database");
                            
                        }
        
    
                    }
//             }
//         }
//     }
// }
            
)

router.delete('/inventory/delete/:zipcode', async (req, res) => {
   // var id = req.params.id;
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
        //const email = req.body.email;
        var zipcode = req.params.zipcode;
        //const data = await User.findById(id)

        inventory = await Inventory.findOne({ zipcode:req.params.zipcode });
        if (inventory) {
            inventory.delete(zipcode)
            return res.send(inventory);
            
        }
        else {
            res.status(404).send(
                "Cannot delete as zipcode doesn't exist in database"
            );
            return;
        }
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
})


router.post('/drive/create', async (req, res) => {
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

                    drive = await Drive.findOne({ zipcode: req.body.zipcode });
                    if (drive) {
                        res.status(409).send(
                            "Drive already exists"
                        );
                        return;


                    }
                    else {
                        let drive = new Drive({
                            name: req.body.name,
                            address: req.body.address,
                            zipcode: req.body.zipcode,
                            date:req.body.date

                        });

                        Drive.addDrive(drive, (err, result) => {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                res.send(drive);
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
    var id=req.body.id;
    var name = req.body.name;
    var address = req.body.address;
    var zipcode = req.body.zipcode;
    try {
        const data = await Drive.find();
        res.send(data)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
})


router.put('/drive/edit', async (req, res) => {
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

                        drive= await Drive.findOne({zipcode: req.body.zipcode});
            
                        if(drive)
                        {
                            const name = req.body.name;
                            const address= req.body.address;
                            const zipcode = req.body.zipcode;
                            const date=req.body.date;
                            const options = { new: true };
                            const result = await Drive.findOneAndUpdate({zipcode:zipcode},{name : name , address: address, date:date},options);
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


router.delete('/drive/delete/:zipcode', async (req, res) => {
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
        const zipcode=req.params.zipcode;
        //const data = await User.findById(id)

        drive = await Drive.findOne({ zipcode: req.params.zipcode });
        if (drive) {
            drive.delete(zipcode)
            return res.send(drive)
        }
        else {
            res.status(404).send(
                "Cannot delete as drive data doesn't exist in database"
            );
            return;
        }
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
})

module.exports = router;