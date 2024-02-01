var express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const { isAdmin, isDoctor } = require('../middleware/authMidleware');

//signup
router.post("/add", userController.addUser);

//signup_ADMIN
router.post("/addadmin", userController.addAdmin);

//Login
router.post('/login', userController.logIn);
//Login
router.post("/loginadmin", userController.logInAdmin);


//SignUP_DOCTOR
router.post("/adddoctor", userController.addDoctor);
//Login_Doctor
router.post('/logindoctor', userController.logInDoctor);
// Edit_Doctor
router.put('/editdoctor/:id', userController.CHECKJWT, isDoctor, userController.EditDoctor);

//Alluser
router.get("/all", userController.CHECKJWT, isAdmin, userController.ALLUSER);
//getuser
router.get("/getuser/:id", userController.CHECKJWT, userController.USERBYID);
//getuser
router.get(
  "/searchuserbyname/:name",
  userController.CHECKJWT,
  userController.SearchBYnameTUSER
);

// update
router.put('/update/:id', userController.CHECKJWT, userController.EDITUSER);

// delete
router.delete('/delete/:id', userController.CHECKJWT, userController.DELETETUSER);

// //Logout
router.get("/alldata", userController.ALLDATA);







//mobile verification

router.post("/start-verification",userController.startVerification);

router.post("/check-verification",userController.checkVerification);

module.exports = router;
