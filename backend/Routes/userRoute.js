const express = require("express");
const router = express.Router();
const { requireSignin } = require("../controllers/authController");
const {
     userById,
     allUsers,
     getUser,
     updateUser,
     deleteUser,
     addFollowing,
     addFollower,
     addFollowingHospital,
     removeFollowing,
     removeFollowingHospital,
     removeFollower,
     findPeople
} = require("../controllers/userController");


router.put("/user/follow", requireSignin, addFollowing, addFollowingHospital, addFollower) ;
router.put('/user/unfollow', requireSignin, removeFollowing, removeFollowingHospital, removeFollower )

router.get('/users', allUsers);
router.get('/user/:userId', requireSignin, getUser);
router.put('/user/:userId', requireSignin, updateUser);
router.delete('/user/:userId', requireSignin, deleteUser);

//who to follow:
router.get('/user/findpeople/:userId', requireSignin, findPeople)

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;