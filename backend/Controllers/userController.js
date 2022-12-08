const User =  require('../Models/userLogin')
const formidable = require('formidable')
const form = formidable();
const fs = require('fs')  //core node js module
const _ = require('lodash')


exports.userById = (req, res, next, id) => {
    User.findById(id)
        // populate followers and following users array
        .populate('following', '_id name')
        .populate('followers', '_id name')
        .populate('followingHospital', '_id hospitaName')
        .exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: 'User not found by UserBy I API'
                });
            }
            req.profile = user; // adds profile object in req with user info
            next();
        });
};

// exports.hasUserAuthorization = (req, res, next) => {
//     const authorized = req.profile && req.auth && req.profile._id === req.auth._id
//     if(!authorized){
//         return res.status(403).json({error: "User is not authorized to perfom this action."})
//     }
// }

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(users)
    })
    .select('name email created updated')
}

exports.getUser = (req, res) => {
    return res.json(req.profile);
    //Not going to ther frontend:
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
};

exports.updateUser = (req, res, next) => {
    let user = req.profile;
    user = _.extend(user, req.body) //extended: mutate the source object
    user.updated = Date.now()
    user.save((err) => {
        if(err){
            return res.status(400).json({
                error: "You are not authorized to perform this action"
            })
        }
         //Not going to ther frontend:
        user.hashed_password = undefined
        user.salt = undefined
        res.json({user: user})
    })
}

// exports.updateUser = (req, res, next) => {
//     let form = new formidable.IncomingForm()
//     form.keepExtensions = true
//     form.parse(req, (err, fields, files) => {
//         if(err){
//             return res.status(400).json({
//                 error: "Photo could not be uploaded"
//             })
//         }
//         let user = req.profile
//         user = _.extend(user, fields)
//         user.updated = Date.now()

//         if(files.photo){
//             user.photo.data = fs.readFileSync(files.photo.path)
//             user.photo.contentType = files.photo.type
//         }

//         user.save((err, result) =>{
//             if(err){
//                 return res.status(400).json({
//                     error: err
//                 })
//             }
//             user.hashed_password = undefined
//             user.salt = undefined;
//             res,json(user);
//         });
//     });
// }

exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if(err){ 
            return res.status(400).json({
            error: err
        })
     }
       //Not going to ther frontend:
       user.hashed_password = undefined
       user.salt = undefined
       res.json({ message: "User deleted."}) 
    })
}

//follow // unfollow

exports.addFollowing = (req, res, next) => {
    User.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followId } }, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        next();
    });
};

exports.addFollowingHospital = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.hospitalId, 
        {$push: {hospitalFollowing: req.body.followId}},
        (err, result) => {
        if(err){
            return res.status(400).json({error: err});
        }
        next();
    })
}

exports.addFollower = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.followId, 
        {$push: {followers: req.body.userId}},
        {new: true}
    )
    .populate('following', '_id name')
    .populate('hospitalFollowing', '_id name')
    .populate('followers', '_id name')
    .exec((err, result) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        result.hashed_password = undefined
        result.salt = undefined
        res.json(result)
    })
};

exports.removeFollowing = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.userId, 
        {$pull: {following: req.body.unfollowId}},
        (err, result) => {
        if(err){
            return res.status(400).json({error: err});
        }
        next();
    })
}

exports.removeFollowingHospital = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.hospitalId, 
        {$pull: {hospitalFollowing: req.body.unfollowId}},
        (err, result) => {
        if(err){
            return res.status(400).json({error: err});
        }
        next();
    })
}

exports.removeFollower = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.unfollowId, 
        {$pull: {followers: req.body.userId}},
        {new: true}
    )
    .populate('following', '_id name')
    .populate('hospitalFollowing', '_id name')
    .populate('followers', '_id name')
    .exec((err, result) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        result.hashed_password = undefined
        result.salt = undefined
        res.json(result)
    })
};

exports.findPeople = (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    User.find({_id: {$nin: following}}, //nin: not include
        (err, users) => {
            if(err){
                return res,status(400).json({
                    error: err
                })
            }
            res.json(users)
        }).select('name') 
}