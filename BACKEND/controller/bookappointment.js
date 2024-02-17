const DOCTORAVAILABILITY = require("../model/doctoravailability");
const BOOKAPPOINTMENT = require("../model/bookappointment");
const DOCTOR = require("../model/doctor");
const USER = require("../model/user");

//====================bookappointment====================

exports.book = async function (req, res, next) {
  console.log(req.body);
  try {
    // if (!req.body.date || !req.body.time || !req.body.name || !req.body.email || !req.body.gender || !req.body.message || !req.body.transactionid) {
    //     throw new Error('Enter the details')
    // }
    if (
      !req.body.date ||
      !req.body.time ||
      !req.body.name ||
      !req.body.email ||
      !req.body.gender ||
      !req.body.transactionid
    ) {
      throw new Error("Enter the details");
    }

    const isValidDoctor = await DOCTOR.exists({ _id: req.body.doctor });
    if (!isValidDoctor) {
      throw new Error("doctor is not available");
    }

    const dateObject = new Date(req.body.date);
    var date = dateObject.toLocaleDateString("en-US", { weekday: "long" });

    const isTimeAvailable = await DOCTORAVAILABILITY.exists({
      doctorid: req.body.doctor,
      "bookingavailabilityInformation.day": date.slice(0, 3),
      "bookingavailabilityInformation.available": true,
      "bookingavailabilityInformation.bookingtime": { $in: [req.body.time] },
    });

    if (!isTimeAvailable) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid time for the doctor on the specified date",
      });
    }

    const doctorDetails = await DOCTOR.findById({ _id: req.body.doctor });

    const data = await BOOKAPPOINTMENT.create(req.body);
    
    res.status(201).json({
      status: "sucessfull",
      messgae: "appointment booked sucessfully",
      data,
      doctorDetails,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//==========================allAppointment==================================

exports.allAppointment = async function (req, res, next) {
  try {
    const data = await BOOKAPPOINTMENT.find()
      .populate("doctor")
      .populate("user");
    res.status(201).json({
      status: "sucessfull",
      message: "all appointment is found",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//==========================Check Appointment==================================
// doctor + date
exports.AvailableAppointment = async function (req, res, next) {
  try {
    const data = await BOOKAPPOINTMENT.find({
      doctor: req.body.doctor,
      date: req.body.date,
    });
    const time = [];
    data.forEach((e) => {
      return time.push(e.time);
    });
    console.log("time", time);
    console.log("data", data);
    date = req.body.date;
    res.status(201).json({
      status: "sucessfull",
      message: "All Available Appointment is Found",
      data,
      time,
      date,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// BY BOOKING ID
exports.getAppointmentbyID = async function (req, res, next) {
  try {
    const data = await BOOKAPPOINTMENT.findById(req.params.id)
      .populate("doctor")
      .populate("user");
    res.status(201).json({
      status: "sucessfull",
      message: "Data Get",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.DeleteAppointment = async function (req, res, next) {
  try {
    const data = await BOOKAPPOINTMENT.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "sucessfull",
      message: "Deleted",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
// exports.DeleteAllAppointment = async function (req, res, next) {
//     try {
//         const data = await BOOKAPPOINTMENT.deleteMany();
//         res.status(201).json({
//             status: "sucessfull",
//             message: "Deleted",
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: "fail",
//             message: error.message
//         })
//     }
// }

exports.ApponmentByDoctorID = async (req, res) => {
  try {
    const data = await BOOKAPPOINTMENT.find({
      doctor: req.params.id,
    })
      .populate("doctor")
      .populate("user");
    res.status(201).json({
      status: "sucessfull",
      message: "Get book Apponments",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ================================= reschedule book===================
exports.rescheduleBooking = async (req, res) => {
  console.log(req.body);
  try {
    const data = await BOOKAPPOINTMENT.findByIdAndUpdate(
      req.params.id,
      {
        $set: { date: req.body.DATE, time: req.body.TIME },
      },
      { new: true }
    );

    res.status(201).json({
      status: "sucessfull",
      message: "Update book Apponments",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.AcceptAppoinment = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const data = await BOOKAPPOINTMENT.findByIdAndUpdate(
      req.params.id,
      {
        isAccepted: req.body.Accepted,
      },
      {
        new: true,
      }
    );



    // updateDoctor = await DOCTOR.updateOne(
    //   { _id: req.body.doctor },
    //   {
    //     $push: {
    //       patients: req.body.user,
    //     },
    //   },
    //   { new: true }
    // );
    res.status(201).json({
      status: "sucessfull",
      message: "Accept  Apponments",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.AcceptedAppoinmentList = async (req, res) => {
  try {
    const data = await BOOKAPPOINTMENT.find({
      isAccepted: req.query.isAccepted,
      doctor: req.params.id,
    }).populate("user");

    res.status(201).json({
      status: "sucessfull",
      message: "Accepted  Apponments",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};




exports.bookingsBYuserList = async (req, res) => {
  const userID = req.params.id;
  try {
    const data = await BOOKAPPOINTMENT?.find({ user: userID }).populate(
      "doctor"
    );

    res.status(201).json({
      status: "sucessfull",
      message: "Get book Apponments",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

