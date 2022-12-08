const _ = require('lodash')
const Hospital =  require('../Models/hospitalLogin')

exports.hospitalById = (req, res, next, id) => {
    Hospital.findById(id)
    .exec((err, hospital) => {
        if(err || !hospital ){
            return res.status(400).json({
                error: 'Hospital not found from API.'
            })
        }
        req.profile = hospital; //adds profile object in req with user info
        next();
    })
}


exports.hasHospitalAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id
    if(!authorized){
        return res.status(403).json({error: "Hospital/Clinic is not authorized to perfom this action."})
    }
}

exports.allHospitals = (req, res) => {
    Hospital.find((err, hospitals) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(hospitals)
    })
    .select('hospitalName address created updated')
}

exports.getHospital = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile);
};

exports.updateHospital = (req, res, next) => {
    let hospital = req.profile;
    hospital = _.extend(hospital, req.body) //extended: mutate the source object
    hospital.updated = Date.now()
    hospital.save((err) => {
        if(err){
            return res.status(400).json({
                error: "You are not authorized to perform this action"
            })
        }
         //Not going to ther frontend:
         hospital.hashed_password = undefined
         hospital.salt = undefined
        res.json({hospital: hospital})
    })
}

exports.deleteHospital = (req, res, next) => {
    let hospital = req.profile;
    hospital.remove((err, hospital) => {
        if(err){ 
            return res.status(400).json({
            error: err
        })
     }
       //Not going to ther frontend:
       hospital.hashed_password = undefined
       hospital.salt = undefined
       res.json({ message : "Hospital deleted"}) 
    })
}