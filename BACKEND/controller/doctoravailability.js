const TIME = require("../model/time");
const DOCTOR = require("../model/doctor");
const DOCTORAVAILABILITY = require("../model/doctoravailability");
const BOOKAPPOINTMENT = require("../model/bookappointment");
const dayjs = require("dayjs");
//====================doctorAvailable================
exports.availability = async function (req, res, next) {
  try {
    var bookdata = req.body.bookingavailabilityInformation;
    var bookingAvailabilityInformation =
      bookdata.bookingavailabilityInformation;
    var time = bookdata.map((info) => info?.bookingtime);
    time = JSON.parse(time);

    req.body.bookingavailabilityInformation[0].bookingtime = time;

    console.log(req.body);

    const data = await DOCTORAVAILABILITY.create(req.body);
    res.status(201).json({
      status: "successful",
      message: "added succesfully",
      data,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//====================alltimeAvailbles===================

exports.allData = async function (req, res, next) {
  try {
    const data = await DOCTORAVAILABILITY.find();
    res.status(200).json({
      status: "succesful",
      message: "data is found",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//====================updateAvailableTime==================

exports.updatAvailable = async function (req, res, next) {
  try {
    const getData = await DOCTORAVAILABILITY.findOne({
      doctorid: req.params.id,
    });

    const data = { ...getData._doc, ...req.body };
    console.log("getData", getData);
    console.log("data", data);

    if (data?.doctorid) {
      const cheCkid = await DOCTOR.findOne({ _id: data.doctorid });
      if (!cheCkid) {
        throw new Error("doctor not found");
      }
    }

    if (data?.bookingavailabilityInformation) {
      var bookdata = req.body?.bookingavailabilityInformation;
      console.log("bookdata", bookdata);

      var time = bookdata?.map((info) => info.bookingtime);
    }
    time = JSON.parse(time);

    req.body.bookingavailabilityInformation[0].bookingtime = time;
    console.log(req.body?.bookingavailabilityInformation[0]?.day);
    const findData = await DOCTORAVAILABILITY.find({
      doctorid: req.params.id,
      bookingavailabilityInformation: {
        $elemMatch: { day: req.body?.bookingavailabilityInformation[0]?.day },
      },
    });
    console.log("findData", findData);
    console.log(time);

    const udata = await DOCTORAVAILABILITY.updateOne(
      {
        doctorid: req.params.id,
        bookingavailabilityInformation: {
          $elemMatch: { day: req.body?.bookingavailabilityInformation[0]?.day },
        },
      },
      {
        $set: {
          "bookingavailabilityInformation.$.bookingtime": time,
          "bookingavailabilityInformation.$.day":
            req.body?.bookingavailabilityInformation[0]?.day,
          "bookingavailabilityInformation.$.available":
            req.body?.bookingavailabilityInformation[0]?.available,
        },
      },

      { new: true }
    );

    console.log("udata", udata);
    res.status(200).json({
      status: "successfull",
      message: "updated successfull",
      udata,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//================deleteAvailability=======================

exports.deleteAvailable = async function (req, res, next) {
  try {
    const data = await DOCTORAVAILABILITY.deleteMany();
    res.status(200).json({
      status: "successfull",
      message: "deleted successfull",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.deleteAvailableSingle = async function (req, res, next) {
  try {
    const data = await DOCTORAVAILABILITY.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "successfull",
      message: "deleted successfull",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
//================Doctor ID Availability=======================

exports.DOCTORIDSEARCH = async function (req, res, next) {
  try {
    var data = await DOCTORAVAILABILITY.findOne({
      doctorid: req.params.id,
    });
    let doctor = await DOCTOR.findById(req.params.id);

    res.status(200).json({
      status: "successfull",
      message: "data get successfull",
      data,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//================SearchAvailability=======================

exports.searchAvailableDrID = async function (req, res, next) {
  try {
    const data2 = await BOOKAPPOINTMENT.find({
      doctor: req.params.id,
      date: req.query.date,
    });

    date = new Date(req.query.date);
    //send date in body in checkAvailability
    const time = [];
    data2?.forEach((e) => {
      return time?.push(e.time);
    });

    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // targetDay = day[date.getDay()];
    targetDay = day[date.getDay()];

    responseData = await DOCTORAVAILABILITY.findOne({
      doctorid: req.params.id,
    });

    responseData.bookingavailabilityInformation =
      responseData?.bookingavailabilityInformation?.filter(
        (dayInfo) => dayInfo.day === targetDay
      );

    if (time?.length > 0) {
      responseData.bookingavailabilityInformation[0].bookingtime =
        responseData?.bookingavailabilityInformation[0]?.bookingtime?.filter(
          (ele) => !time.includes(ele)
        );
    }

    res.status(200).json({
      status: "successfull",
      message: "data generated successfully",
      responseData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.searchAvailableDrIDandDAY = async function (req, res, next) {
  try {
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    targetDay = req.query.day;

    responseData = await DOCTORAVAILABILITY.findOne({
      doctorid: req.params.id,
    });

    responseData.bookingavailabilityInformation =
      responseData?.bookingavailabilityInformation?.filter(
        (dayInfo) => dayInfo.day === targetDay
      );

    res.status(200).json({
      status: "successfull",
      message: "data generated successfully",
      responseData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.searchAvailableByDate = async function (req, res, next) {
  try {
    var { mydate, diff } = req.query;

    const currentDate = new Date(mydate);

    const nextSevenDays = new Date(mydate);

    nextSevenDays.setDate(currentDate.getDate() + diff);

    const allDoctors = await DOCTORAVAILABILITY.find({}).limit(1000);
    if (!allDoctors || allDoctors.length === 0) {
      throw new Error("No doctors found or no availability for any doctor.");
    }

    const notAvailableDoctorIds = [];
    for (const doctor of allDoctors) {
      const hasNotAvailability = doctor?.bookingavailabilityInformation?.some(
        (availability) => {
          const dayDate = new Date();
          dayDate.setDate(
            currentDate.getDate() +
              ((["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
                availability.day
              ) -
                currentDate.getDay() +
                diff) %
                diff)
          );

          return (
            dayDate <= nextSevenDays &&
            dayDate.getDate() >= currentDate.getDate() &&
            availability.available === false
          );
        }
      );

      if (hasNotAvailability) {
        notAvailableDoctorIds.push(doctor.doctorid.toString());
      }
      //check
    }

    const filterData = await DOCTOR.find({
      _id: { $nin: notAvailableDoctorIds },
    });

    res.status(200).json({
      status: "successfull",
      message: "data generated successfully",
      filterData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
