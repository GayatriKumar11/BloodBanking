var Pickup = require('../model/pickup.model');


const createPickup = async (req, res) => {

    var bloodCentrename = req.body.bloodCentrename;
    var recieverName = req.body.recieverName;
    var dateOfPickup = req.body.dateOfPickup;
    var bloodType = req.body.bloodType;


    let pickup = new Pickup({

        bloodCentrename: bloodCentrename,
        recieverName: recieverName,
        dateOfPickup: dateOfPickup,
        bloodType: bloodType,

    });

    Pickup.addPickup(pickup, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

}

module.exports = {
    createPickup
}