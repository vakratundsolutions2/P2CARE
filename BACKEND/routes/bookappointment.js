var express = require('express');
var router = express.Router();
const bookappointmentController = require("../controller/bookappointment")
const userController = require('../controller/user');
const { isDoctor, isAdmin } = require('../middleware/authMidleware');

//addappointment
router.post(
  "/bookappointment",
  userController.CHECKJWT,
  bookappointmentController.book
);

// allappointment
router.get(
  "/allbookappointment",
  userController.CHECKJWT,
  isAdmin,
  bookappointmentController.allAppointment
);
// appointment by ID


router.get(
  "/appointment/:id",
  userController.CHECKJWT,
  
  bookappointmentController.getAppointmentbyID
);
router.get(
  "/doctorappointment/:id",
  // userController.CHECKJWT,

  bookappointmentController.ApponmentByDoctorID
);
router.get(
  "/appointment/:id",
  // userController.CHECKJWT,

  bookappointmentController.ApponmentByID
);
router.put(
  "/reschedulebooking/:id",
  userController.CHECKJWT,
  isDoctor,

  bookappointmentController.rescheduleBooking
);
router.put(
  "/acceptappoinment/:id",
  userController.CHECKJWT,
  isDoctor,

  bookappointmentController.AcceptAppoinment
);





// Check Availability
router.post('/checkAvailability',bookappointmentController.AvailableAppointment);


// Delete BookAppointment
router.delete("/appointment/:id",isDoctor,isAdmin, bookappointmentController.DeleteAppointment);
// get accepted  BookAppointment
router.get(
  "/acceptedappointment/:id",
  // isDoctor,
  bookappointmentController.AcceptedAppoinmentList
);


module.exports = router;    