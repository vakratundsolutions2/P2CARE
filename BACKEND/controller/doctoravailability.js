const TIME = require("../model/time");
const DOCTOR = require("../model/doctor");
const DOCTORAVAILABILITY = require("../model/doctoravailability");
const BOOKAPPOINTMENT = require("../model/bookappointment");
//====================doctorAvailable================
exports.availability = async function (req, res, next) {
  try {
    var bookdata = req.body.bookingavailabilityInformation;
    const bookingAvailabilityInformation =
      bookdata.bookingavailabilityInformation;
    const time = bookdata.map((info) => info?.bookingtime);
    const checkTime = async (el) => {
      const timeResult = await TIME.find({ Time: el });
      return timeResult?.length > 0;
    };
    const isValidTime = await Promise.all(
      time.flat().map(async (el) => await checkTime(el))
    );

    if (!isValidTime.every(Boolean)) {
      throw new Error("Invalid add value");
    }

    // res.send(req.body);
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
    const data = { ...getData?._doc, ...req.body };

    if (data?.doctorid) {
      const cheCkid = await DOCTOR.findOne({ _id: data.doctorid });
      if (!cheCkid) {
        throw new Error("doctor is not");
      }
    }

    if (data.bookingavailabilityInformation) {
      var bookdata = data.bookingavailabilityInformation;

      const bookingAvailabilityInformation =
        bookdata.bookingavailabilityInformation;
      const time = bookdata.map((info) => info?.bookingtime);
      // const bookingAvailabilityInformation = bookdata.bookingavailabilityInformation;
      // includes;
      const checkTime = async (el) => {
        const timeResult = await TIME.find({ Time: el });
        return timeResult.length > 0;
      };
      const isValidTime = await Promise.all(
        time.flat().map(async (el) => await checkTime(el))
      );
      if (!isValidTime.every(Boolean)) {
        throw new Error("Invalid add value");
      }
    }

    const udata = await DOCTORAVAILABILITY.findOneAndUpdate({ doctorid:req.params.id }, req.body, {
      new: true,
    });
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
//================Doctor ID Availability=======================

exports.DOCTORIDSEARCH = async function (req, res, next) {
  try {
    const data = await DOCTORAVAILABILITY.findOne({
      doctorid: req.params.id,
    });
    res.status(200).json({
      status: "successfull",
      message: "data get successfull",
      data,
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
  console.log("date:",req.query.date);
  try {

    
     const data2 = await BOOKAPPOINTMENT.find({
       doctor: req.params.id,
       date: req.query.date,
     });
     date=new Date(req.query.date);
     //send date in body in checkAvailability
     const time = [];
     data2.forEach((e) => {
       return time.push(e.time);
     });
     

  
     var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     targetDay=day[date.getDay()]

     console.log("targetDay", targetDay);
     
    
     responseData = await DOCTORAVAILABILITY.findOne({
       doctorid: req.params.id,
     });

     
     responseData.bookingavailabilityInformation =
       responseData.bookingavailabilityInformation.filter(
         (dayInfo) => dayInfo.day === targetDay
       );
   if (time.length > 0) {
     console.log("data", responseData.bookingavailabilityInformation);
     responseData.bookingavailabilityInformation[0].bookingtime =
       responseData.bookingavailabilityInformation[0]?.bookingtime?.filter(
         (ele) => !time.includes(ele)
       );
   }

   console.log('responseData',responseData);
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


exports.searchAvailableByDate=async function(req,res,next){

  try {
    console.log("Searching");
    var { mydate, diff } = req.query;
   
    const currentDate = new Date(mydate);
    
    const nextSevenDays = new Date(mydate);
   
    nextSevenDays.setDate(currentDate.getDate()  + diff);

    

    const allDoctors = await DOCTORAVAILABILITY.find({}).limit(1000);
     if (!allDoctors || allDoctors.length === 0) {
      throw new Error("No doctors found or no availability for any doctor.");
     }

     const notAvailableDoctorIds = [];
      for (const doctor of allDoctors) {
     const hasNotAvailability = doctor.bookingavailabilityInformation.some(
       (availability) => {
         const dayDate = new Date();
         dayDate.setDate(
           currentDate.getDate() +((["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(availability.day) - currentDate.getDay() +   diff) %  diff)
         );
          console.log(dayDate+":"+availability.day+":"+availability.available);
         return dayDate <= nextSevenDays && dayDate.getDate()>=currentDate.getDate() && availability.available === false;
       }
     );
     
     if (hasNotAvailability) {
       notAvailableDoctorIds.push(doctor.doctorid.toString());
     }
 //check 
  }

  const filterData = await DOCTOR.find({_id:{$nin:notAvailableDoctorIds}});

  
          res.status(200).json({
            status: "successfull",
            message: "data generated successfully",
            filterData,
          });
   /* const { mydate , diff}=req.query;

    console.log("req.query", req.query);
    const currentDate = new Date(mydate);
    const next7Days = new Date(mydate);
    next7Days.setDate(currentDate.getDate() + diff);
console.log("next7Days: " , next7Days)
console.log("currentDate: ", currentDate);
    const filterData = await BOOKAPPOINTMENT.aggregate([
      {
        $addFields: {
          dateObject: {
            $dateFromString: {
              dateString: "$date",
              format: "%Y-%m-%d",
            },
          },
        },
      },
      {
        $match: {
          dateObject: { $gte: currentDate, $lt: next7Days },
        },
      },
      {
        $group: {
          _id: "$doctor",
          appointmentCount: { $sum: 1 },
        },
      },
      {
        $match: {
          appointmentCount: { $eq: Number(diff) },
        },
      },
      {
        $project: {
          _id: 1,
          
        },
      },
    ]);


    console.log("filterData", filterData);
    //convert map to arrray
    const doctorIdsArray = filterData?.map((obj) => obj._id);

        console.log("filterData", doctorIdsArray);

    const finalFilterData =await DOCTOR.find({ _id: { $nin: doctorIdsArray } })


console.log("filterData:", filterData);
res.status(200).json({
  status: "successfull",
  message: "data generated successfully",
  finalFilterData,

}

); */ 
  } catch (error) {
    
     res.status(500).json({
       status: "fail",
       message: error.message,
     });
  }

}
