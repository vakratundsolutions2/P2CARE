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


// bookings by user id


router.get(
  "/appointmentsbyuser/:id",
  userController.CHECKJWT,
  
  bookappointmentController.bookingsBYuserList
);

// bookings by doctor id


// router.get(
//   "/appointmentsbydoctor/:id",
//   userController.CHECKJWT,

//   bookappointmentController.bookingsBYdoctorList
// );











// appointment by BOOKING ID
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