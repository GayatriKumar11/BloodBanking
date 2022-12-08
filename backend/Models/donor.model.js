var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
       
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },

    bloodgroup:{
        type: String,
        required: true,
    },

    phonenumber:{
        type:String,
        required:true
    }
});

var User = mongoose.model('User', userSchema);
// save user to database

User.addUser = function(user, callback){

    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            callback('server error');
        }else 
        {
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err){
                    callback('server error');
                }else{
                    user.password = hash;
                }
                    user.save((err, result)=>{
                        if(err){
                            callback(err);
                        } else{
                            callback(null, 'user added');
                        }
                    })


            })
        }
    })
}

User.updateUser = function(user, callback){

    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            callback('server error');
        }else 
        {
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err){
                    callback('server error');
                }else{
                    user.password = hash;
                }
                    user.save((err, result)=>{
                        if(err){
                            console.log(err);
                            callback('Failed to updated', null);
                        } else{
                            callback(null, 'user updated');
                        }
                    })


            })
        }
    })
}

module.exports = User;