const DOCTOR = require("../model/doctor");
const DOCTORCATEGORY = require("../model/doctorcategory");
const HOSPITAL = require("../model/hospital");

//==========================addDoctor=========================
exports.addDoctor = async function (req, res, next) {
  
  try {
    req.body.image = req?.file?.filename;
    if (
      !req.body.doctorName ||
      !req.body.doctorCode ||
      !req.body.departmentName ||
      !req.body.departmentCode ||
      !req.body.designation ||
      !req.body.experties ||
      !req.body.specialities ||
      !req.body.location ||
      !req.body.description ||
      !req.body.shortDescription ||
      !req.body.experienceInfo ||
      !req.body.awardAndAchivementsInfo ||
      !req.body.talkPublicationInfo ||
      !req.body.languageInfo ||
      !req.body.educationInfo ||
      !req.body.fellowShipInfo ||
      !req.body.metaTitle ||
      !req.body.ogMetaTitle ||
      !req.body.metaDescription ||
      !req.body.ogMetaDescription ||
      !req.body.metaTags ||
      !req.body.price ||
      !req.body.image ||
      !req.body.status ||
      !req.body.availabileforappointment
    ) {
      throw new Error("Please Enter Valid Feild");
    }

    const experties = JSON.parse(req.body.experties);
    console.log(experties);
    const cate = experties.map((el) => el);

    const checkCategory = async (el) => {
      const cat = await DOCTORCATEGORY.find({ name: el });
      return cat.length > 0;
    };


    const isValidName = await Promise.all(
      cate.flat().map(async (el) => await checkCategory(el))
    );

    if (!isValidName.every(Boolean)) {
      throw new Error("expertice is not in category");
    }

    const chekspecialist = req.body.experties.includes(req.body.specialities);

    if (chekspecialist === false) {
      throw new Error("Invalid add value");
    }
    

    console.log(req.body);
    req.body.experties = JSON.parse(req.body.experties);
    
    const data = await DOCTOR.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Doctor SucessFully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=============================allDoctor===========================
exports.allDoctor = async function (req, res, next) {
  try {
    const data = await DOCTOR.find(
    //   {
    //   isVarified: true,
    // }
    )
      .populate("ratings.postedby")
      .populate("assign.hospitals");

    res.status(200).json({
      status: "Success",
      message: "Data is found",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};




//===========================update doctor=========================

exports.updateDoctor = async function (req, res, next) {
  try {
    const getData = await DOCTOR.findById(req.params.id);
    var data = { ...getData._doc, ...req.body };

    if (req.file) {
      data.image = req.file.filename;
    }

    if (data.experties) {
      const experties = JSON.parse(data.experties);

      const cate = experties?.map((el) => el);
      // console.log('category', cate);
      const checkCategory = async (el) => {
        const cat = await DOCTORCATEGORY.find({ name: el });
        return cat.length > 0;
      };
      const isValidName = await Promise.all(
        cate.flat().map(async (el) => await checkCategory(el))
      );

      if (!isValidName.every(Boolean)) {
        throw new Error("Invalid add category");
      }
    }

    if (data.specialities) {
      let experties = data.experties;
      const chekspecialist = experties.includes(data.specialities);
      if (chekspecialist === false) {
        throw new Error("Invalid add value");
      }
    }
    
    if (data.status) {
      if (data.status && !["publish", "draft"].includes(data.status)) {
        throw new Error("Invalid status value");
      }
    }

    data.experties = JSON.parse(data.experties); 
    const udata = await DOCTOR.findByIdAndUpdate(req.params.id, data);
    res.status(200).json({
      status: "Sucessfull",
      message: "data is updated sucessfully",
      udata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//=================deleteDoctor================
exports.deleteDoctor = async function (req, res, next) {
  try {
    await DOCTOR.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "SuccessFul",
      message: "Data is deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=====================searchDoctor=====================
exports.searchDoctor = async function (req, res, next) {
  try {
    const data = await DOCTOR.find({
      doctorName: { $regex: req.params.name, $options: "i" },
    })
      .populate("ratings.postedby")
      .populate("assign.hospitals");
    res.status(200).json({
      status: "Successfull",
      message: "Data is found",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=====================searchDoctorbyId=====================
exports.searchDoctorById = async function (req, res, next) {
  try {
    const data = await DOCTOR.findById(req.params.id)
      .populate("ratings.postedby")
      .populate("assign.hospitals");

      console.log(data);
    res.status(200).json({
      status: "Successfull",
      message: "Data is found",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

// Creating a new reting session
exports.rating = async (req, res) => {
  const { _id } = req.user;
  const { star, doctorID, comment } = req.body;
  try {
    const doctor = await DOCTOR.findById(doctorID);
    let alreadyrated = doctor.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );

    if (alreadyrated) {
      const updateRatings = await DOCTOR.updateOne(
        {
          ratings: { $elemMatch: alreadyrated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        { new: true }
      );
      // res.json(updateRatings)
    } else {
      const rateProduct = await DOCTOR.findByIdAndUpdate(
        doctorID,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: req.user,
              date: Date.now(),
            },
          },
        },
        {
          new: true,
        }
      );
      // res.json(rateProduct);
    }

    const getallrating = await DOCTOR.findById(doctorID);
    let totalratings = getallrating.ratings.length;
    let ratingsum = getallrating.ratings
      .map((iten) => iten.star)
      .reduce((prev, curr) => prev + curr, 0);
    let orignalrating = Math.round(ratingsum / totalratings);
    let finaldoctor = await DOCTOR.findByIdAndUpdate(
      doctorID,
      {
        totalratings: orignalrating,
      },
      { new: true }
    );

    res.json(finaldoctor);
  } catch (error) {
    throw new Error(error);
  }
};

//=====================searchDoctorFilters=====================
exports.searchDoctorByFiltets = async function (req, res, next) {
  try {
    const currentpage = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const name = req.query.name || "";
    const specialities = req.query.specialities || "";
    const sort = req.query.sort || 1;
    const minAMT = req.query.minAmount || 0;
    const maxAMT = req.query.maxAmount || 2000;
    const Star = req.query.rating||'';
    const location = req.query.location || "";
    const Gender = req.query.gender || "";
    var { mydate, diff } = req.query;

    const notAvailableDoctorIds = [];
    if(mydate!=0){

      const currentDate = new Date(mydate);

      const nextSevenDays = new Date(mydate);

      nextSevenDays.setDate(currentDate.getDate() + diff);

      const allDoctors = await DOCTORAVAILABILITY.find({});
      if (!allDoctors || allDoctors.length === 0) {
        throw new Error("No doctors found or no availability for any doctor.");
      }

      
      for (const doctor of allDoctors) {
        const hasNotAvailability = doctor.bookingavailabilityInformation.some(
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
            console.log(
              dayDate + ":" + availability.day + ":" + availability.available
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

    }

    var method = { doctorName: Number(sort) };

    const data = await DOCTOR.find({
      _id: { $nin: notAvailableDoctorIds },
      gender: { $regex: Gender },
      doctorName: { $regex: name, $options: "i" },
      specialities: { $regex: specialities },
      totalratings: { $regex: Star },
      // isVarified: true,
      price: { $gte: minAMT, $lte: maxAMT },
    })
      .sort(method)
      .skip(currentpage * limit)
      .limit(limit)
      .populate("ratings.postedby")
      .populate("assign.hospitals");

    const total = await DOCTOR.countDocuments({
      gender: { $regex: Gender },
      doctorName: { $regex: name, $options: "i" },
      specialities: { $regex: specialities },
      totalratings: { $regex: Star },
      price: { $gte: minAMT, $lte: maxAMT },
      // isVarified: true,
    });
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      status: "Successfull",
      message: "Data is found",
      data: { data, total, currentpage: currentpage + 1, limit, totalPages },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

// Block the Doctor

exports.blockDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const block = await DOCTOR.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "Doctor Blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
};
exports.unblockDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const unblock = DOCTOR.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "Doctor UnBlocked",
    });
  } catch (error) {
    throw new Error(error);
  }
};



exports.acceptdoctor = async (req,res)=>{

  try {

    const data = await DOCTOR.findByIdAndUpdate(
      req.params.id,
      {
        isVarified: true,
      },
      {
        new: true,
      }
    );
 res.status(200).json({
   status: "Successfull",
   message: "accept is found",
   data,
 });

  } catch (error) {
    throw new Error(error);
  }
}






exports.verifiedDoctor = async (req,res)=>{

  try {

    const data = await DOCTOR.find({

      isVarified: true
    }
    );
 res.status(200).json({
   status: "Successfull",
   message: "accept is found",
   data,
 });

  } catch (error) {
    throw new Error(error);
  }
}





