const HOSPITAL = require("../model/hospital");
const DOCTORCATEGORY = require("../model/doctorcategory");
const SERVICE = require("../model/service");
const DOCTOR = require("../model/doctor");

//====================addHospital=======================
exports.addHospital = async function (req, res, next) {
  try {
    // req.body.hospitallogo = req.file.filename
    // if (!req.body.hospitalname || !req.body.hospitaladdress || !req.body.description || !req.body.openingtime || !req.body.closingtime || !req.body.shortdescription || !req.body.category || !req.body.service || !req.body.hospitallogo || !req.body.status) {
    //     throw new Error("Please fill valid data")
    // }

    req.body.hospitallogo = req?.file?.filename;
    if (
      !req.body.hospitalname ||
      !req.body.hospitaladdress ||
      !req.body.description ||
      !req.body.openingtime ||
      !req.body.closingtime ||
      !req.body.shortdescription ||
      !req.body.category ||
      !req.body.service ||
      !req.body.status
    ) {
      throw new Error("Please fill valid data");
    }

    const category = JSON.parse(req.body.category);
    // const category = req.body.category
    const cate = category.map((el) => el);

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
    let service = JSON.parse(req.body.service);
    // let service = req.body.service

    const serv = service?.map((el) => el);
    const checkService = async (el) => {
      const ser = await SERVICE.find({ title: el });
      return ser.length > 0;
    };
    const isValidtitle = await Promise.all(
      serv.flat().map(async (el) => await checkService(el))
    );

    if (!isValidtitle.every(Boolean)) {
      throw new Error("Invalid add service");
    }

    
    req.body.category = JSON.parse(req.body.category);
    
    req.body.service = JSON.parse(req.body.service);

    const data = await HOSPITAL.create(req.body);
    res.status(201).json({
      status: "Sucessfull",
      message: "Added Sucessfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================allhospital====================

exports.allHospital = async function (req, res, next) {
  try {
    const data = await HOSPITAL.find();
    res.status(200).json({
      status: "Success",
      message: "Data is found",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//=======================updatehospital====================

exports.updateHospital = async function (req, res, next) {
  try {
    const getdata = await HOSPITAL.findById(req.params.id);
    const updata = { ...getdata._doc, ...req.body };
    if (req.file) {
      updata.hospitallogo = req.file?.filename;
    }
    if (updata.category) {
      const category = JSON.parse(updata.category);
      const cate = category.map((el) => el);
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
    if (updata.service) {
      let service = JSON.parse(updata.service);
      const serv = service.map((el) => el);
      const checkService = async (el) => {
        const ser = await SERVICE.find({ title: el });
        return ser.length > 0;
      };
      const isValidtitle = await Promise.all(
        serv.flat().map(async (el) => await checkService(el))
      );

      if (!isValidtitle.every(Boolean)) {
        throw new Error("Invalid add service");
      }
    }
    if (updata.status) {
      if (updata.status && !["publish", "draft"].includes(updata.status)) {
        throw new Error("Invalid status value");
      }
    }
    req.body.hospitallogo = updata.hospitallogo;
    
        updata.category = JSON.parse(updata.category);
        updata.service = JSON.parse(updata.service);


    const udata = await HOSPITAL.findByIdAndUpdate(req.params.id, updata);
    res.status(200).json({
      status: "Suceess",
      message: "user updated",
      udata,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================deleteHospital====================

exports.deleteHospital = async function (req, res, next) {
  try {
    await HOSPITAL.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "sucessfully",
      message: "data is deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//=====================searchHospital=====================
exports.searchHospital = async function (req, res, next) {
  try {
    const data = await HOSPITAL.find({
      hospitalname: { $regex: req.params.name, $options: "i" },
    });
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

//=====================searchHospitalId=====================
exports.searchHospitalbyId = async function (req, res, next) {
  try {
    const data = await HOSPITAL.findById(req.params.id).populate(
      "assign.doctor"
    );
    res.status(200).json({
      status: "successfull",
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
//=====================searchHospitalFilters=====================
exports.searchHospitalByFiltets = async function (req, res, next) {
  try {
    const currentpage = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const name = req.query.name || "";
    const sort = req.query.sort || 1;
    const star = req.query.rating || "";
    const category = req.query.category || "";
    const service = req.query.service || "";

    var method = { hospitalname: Number(sort) };

    const data = await HOSPITAL?.find({
      hospitalname: { $regex: name, $options: "i" },
      category: { $regex: category },
      service: { $regex: service },
      totalratings: { $regex: star },
    })
      .sort(method)
      .skip(currentpage * limit)
      .limit(limit);

    const total = await HOSPITAL.countDocuments({
      hospitalname: { $regex: name, $options: "i" },
      category: { $regex: category },
      service: { $regex: service },
      totalratings: { $regex: star },
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

// ------------------- Creating a new reting session ------------------
exports.rating = async (req, res) => {
  const { _id } = req.user;
  const { star, hospitalID, comment } = req.body;
  try {
    const hospital = await HOSPITAL.findById(hospitalID);
    let alreadyrated = hospital?.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );

    if (alreadyrated) {
      const updateRatings = await HOSPITAL.updateOne(
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
      const rateProduct = await HOSPITAL.findByIdAndUpdate(
        hospitalID,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
      // res.json(rateProduct);
    }

    const getallrating = await HOSPITAL.findById(hospitalID);
    let totalratings = getallrating?.ratings.length;
    let ratingsum = getallrating?.ratings
      .map((iten) => iten.star)
      .reduce((prev, curr) => prev + curr, 0);
    let orignalrating = Math.round(ratingsum / totalratings);
    let finalhospital = await HOSPITAL.findByIdAndUpdate(
      hospitalID,
      {
        totalratings: orignalrating,
      },
      { new: true }
    );

    res.json(finalhospital);
  } catch (error) {
    throw new Error(error);
  }
};






exports.asignDoctorHospital = async function (req, res, next) {
  try {
    if (
      !req.body.hospital ||
      !req.body.category ||
      !req.body.doctor ||
      !req.body.amount
    ) {
      throw new Error("please enter feild");
    }
    const checkHospital = await HOSPITAL.findById(req.body.hospital);
    if (!checkHospital) {
      throw new Error("hospital is not available");
    }
    let category = req.body.category;
    const checkCat = checkHospital.category;
    const newCat = checkCat.map((el) => el);

    const checkCategory = newCat.includes(category);
    if (checkCategory === false) {
      throw new Error("Hospital Category is not available");
    }

    const checkDoctor = await DOCTOR.findById(req.body.doctor);
    if (!checkDoctor) {
      throw new Error("invalid choise");
    }

    const checkCatDoc = checkDoctor.experties;
    const newCatDoc = checkCatDoc.map((el) => el);

    const checkCategoryDoc = newCatDoc.includes(category);

    if (checkCategoryDoc === false) {
      throw new Error("Doctor Category is not available");
    }
    //already assign

    let alreadyassign = checkHospital.assign.find(
      (docId) => docId.doctor.toString() === checkDoctor?._id.toString()
    );


    let alreadyassignDOC = checkDoctor.assign.find(
      (docId) => docId.hospitals === checkHospital?._id
    );

    if (alreadyassign && alreadyassignDOC) {
      const hospital = await HOSPITAL.updateOne(
        {
          assign: { $elemMatch: alreadyassign },
        },
        {
          $set: {
            "assign.$.amount": req.body.amount,
            "assign.$.category": req.body.category,
          },
        },
        { new: true }
      ).populate("assign.doctor");

      const doctor = await DOCTOR.updateOne(
        {
          assign: { $elemMatch: alreadyassignDOC },
        },
        {
          $set: {
            "assign.$.amount": req.body.amount,
            "assign.$.category": req.body.category,
          },
        },
        { new: true }
      ).populate("assign.hospitals");

      res.status(200).json({
        status: "sucessfully",
        message: "Assign Updated successfull",
        hospital,
        doctor,
      });
    } else {
      const hospital = await HOSPITAL.findByIdAndUpdate(
        req.body.hospital,
        {
          $push: {
            assign: {
              doctor: req.body.doctor,
              amount: req.body.amount,
              category: req.body.category,
              date: Date.now(),
            },
          },
        },
        {
          new: true,
        }
      ).populate("assign.doctor");
      const doctor = await DOCTOR.findByIdAndUpdate(
        req.body.doctor,

        {
          $push: {
            assign: {
              hospitals: req.body.hospital,
              amount: req.body.amount,
              category: req.body.category,
            },
          },
        },
        { new: true }
      ).populate("assign.hospitals");
      res.status(200).json({
        status: "sucessfully",
        message: "Assign successfull",
        hospital,
        doctor,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.removeAssign = async (req, res) => {

  try {
    const hospital = await HOSPITAL.updateOne(
      {
        assign: { $elemMatch: { _id: req.params.id } },
      },
      {
        $pull: {
          assign: {
            _id: req.params.id,
          },
        },
      },
      { new: true }
    );

    const doctor = await DOCTOR.updateOne(
      {
        assign: { $elemMatch: { hospitals: req.query.hospital } },
      },
      {
        $pull: {
          assign: { $elemMatch: { hospitals: req.query.hospital } },
        },
      },
      { new: true }
    );



    res.status(200).json({
      status: "sucessfully",
      message: "Assign data is deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
