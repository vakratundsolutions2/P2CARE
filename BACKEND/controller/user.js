const USER = require("../model/user");
const DOCTOR = require("../model/doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const twilio = require("twilio");
const DOCTORAVAILABILITY = require("../model/doctoravailability");
const csv = require("csvtojson");
const { response } = require("express");
// Twilio credentials
const accountSid = process.env.twilioAccountSid;
const authToken = process.env.twilioAuthToken;
const verifySid = process.env.twilioVerifySid;
const client = twilio(accountSid, authToken);
const fs = require("fs");
//==================================checkToken===============
https: exports.CHECKJWT = async function (req, res, next) {
  try {
    const token = req.headers.authorization;

    console.log(token);
    if (!token) {
      throw new Error("Token not found");
    }
    const decode = jwt.verify(token, process.env.JwtSign);
    const checkUser = await USER.findById(decode.id);
    if (!checkUser) {
      throw new Error("user not found");
    }
    // req.token = token;

    req.user = checkUser;
    next();
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//=======================addUser====================

exports.addUser = async function (req, res, next) {
  try {
    if (
      !req.body.Username ||
      !req.body.Name ||
      !req.body.Email ||
      !req.body.Password ||
      !req.body.phoneNumber
    ) {
      throw new Error("Please Enter Valid Field");
    }
    req.body.Password = await bcrypt.hash(req.body.Password, 10);

    //check if user already exists or not for same phoneNumber

    const userExists = await USER.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (userExists == null) {
      const data = await USER.create(req.body);
      res.status(201).json({
        status: "Successful",
        message: "User SucessFully Added",
        data,
      });
    } else {
      throw new Error("phone Number already registered");
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
//=======================addAdmin====================

exports.addAdmin = async function (req, res, next) {
  try {
    if (
      !req.body.Username ||
      !req.body.Name ||
      !req.body.Email ||
      !req.body.Password
    ) {
      throw new Error("Please Enter Valid Feild");
    }

    const exist = await USER.findOne({ Email: req.body.Email });
    if (exist) {
      throw new Error("This email already exist");
    }
    req.body.Password = await bcrypt.hash(req.body.Password, 10);
    req.body.Role = "ADMIN";

    const data = await USER.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "User SucessFully Added",
      data: {
        Username: data.Username,
        Name: data.Name,
        Email: data.Email,
        Password: data.Password,
        phoneNumber: data.phoneNumber,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================login====================

exports.logIn = async function (req, res, next) {
  // req.body.phoneNumber = req.body.Email
  try {
    const checkUser = await USER.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (!checkUser) {
      throw new Error("User not found");
    }
    const checkPass = await bcrypt.compare(
      req.body.Password,
      checkUser.Password
    );

    if (!checkPass) {
      throw new Error("Password is Wrong");
    }
    var token = jwt.sign(
      { id: checkUser._id },
      process.env.JwtSign ||
        `my-32-character-ultra-secure-and-ultra-long-secret`
    );

    res.status(200).json({
      status: "Successful",
      message: "Login SucessFully",
      data: {
        token: token,
        Username: checkUser.Username,
        Name: checkUser.Name,
        Email: checkUser.Email,
        phoneNumber: checkUser.phoneNumber,
        Profile: checkUser.Profile,
        gender: checkUser.gender,
        _id: checkUser._id,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================loginADMIN====================

exports.logInAdmin = async function (req, res, next) {
  try {
    const checkUser = await USER.findOne({ Email: req.body.Cred });

    if (!checkUser) {
      throw new Error("User not found");
    }

    if (checkUser.Role !== "ADMIN") throw new Error("Not Authorized");

    const checkPass = await bcrypt.compare(
      req.body.Password,
      checkUser.Password
    );

    if (!checkPass) {
      throw new Error("Password is Wrong");
    }
    var token = jwt.sign(
      { id: checkUser._id },
      process.env.JwtSign ||
        `my-32-character-ultra-secure-and-ultra-long-secret`
    );

    res.status(200).json({
      status: "Successful",
      message: "Admin Login SucessFully",
      data: {
        token: token,
        Username: checkUser.Username,
        Email: checkUser.Email,
        Name: checkUser.Name,
        phoneNumber: checkUser.phoneNumber,
        Profile: checkUser.Profile,
        gender: checkUser.gender,
        Role: checkUser.Role,
        _id: checkUser._id,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================allUser====================

exports.ALLUSER = async function (req, res, next) {
  try {
    const data = await USER.find({
      Role: "USER",
    });
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
//=======================allUser====================

exports.ALLDATA = async function (req, res, next) {
  try {
    const data = await USER.find();
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

//=======================get By Id User====================

exports.USERBYID = async function (req, res, next) {
  try {
    const data = await USER.findById(req.params.id);
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

//=======================deleteUser====================

exports.DELETETUSER = async function (req, res, next) {
  try {
    const DR = await DOCTOR.findOne({ userId: req.params.id });
    if (DR) {
      await DOCTOR.deleteOne({ userId: req.params.id });
      await DOCTORAVAILABILITY.deleteOne({ doctorid: DR?._id });
    }
    await USER.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "sucessfully",
      message: "user is deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//=======================search User====================

exports.SearchBYnameTUSER = async function (req, res, next) {
  try {
    const data = await USER.find({
      Name: { $regex: req.params.name, $options: "i" },
    });
    res.status(200).json({
      status: "sucessfully",
      message: "user Found",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//=======================EditUser====================

exports.EDITUSER = async function (req, res, next) {
  try {
    req.body.token = req.headers.authorization;
    if (req.file) {
      req.body.Profile = req.file.filename;
    }

    const getData = await USER.findById(req.params.id);

    var data = { ...getData._doc, ...req.body };
    if (req.body.Password) {
      req.body.Password = await bcrypt.hash(req.body.Password, 10);
    }

    console.log("req.body", req.body);
    console.log("data", data);

    const udata = await USER.findByIdAndUpdate(
      req.params.id,
      {
        Username: data?.Username,
        Name: data?.Name,
        Email: data?.Email,
        Password: data?.Password,
        phoneNumber: data?.phoneNumber,
        isBlocked: data?.isBlocked,
        Profile: data?.Profile,
        gender: data?.gender,
        Role: data?.Role,
        token: data?.token,
      },
      { new: true }
    );

    res.status(200).json({
      status: "Suceess",
      message: "user updated",
      udata: {
        Username: udata.Username,
        Name: udata.Name,
        Email: udata.Email,
        phoneNumber: udata.phoneNumber,
        Profile: udata.Profile,
        gender: udata.gender,
        token: data?.token,

        _id: udata._id,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================addDoctor====================

//======================Add Doctor====================

exports.addDoctor = async function (req, res, next) {
  try {
    if (
      !req.body.Username ||
      !req.body.Name ||
      !req.body.Email ||
      !req.body.Password ||
      !req.body.phoneNumber
    ) {
      throw new Error("Please Enter Valid Field");
    }

    //check if user already exists or not for same phoneNumber

    const userExists = await USER.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    // const exist = await USER.findOne({ Email: req.body.Email });
    if (userExists) {
      throw new Error("This mobile number already exist");
    }
    req.body.Password = await bcrypt.hash(req.body.Password, 10);
    req.body.Role = "DOCTOR";

    const data = await USER.create(req.body);

    const DOCTOREXIST = await DOCTOR.findOne({ userId: data?._id });
    if (DOCTOREXIST) {
      throw new Error("This Doctor already exist");
    }
    const DRdata = await DOCTOR.create({
      userId: data._id,
      doctorName: data.Name,
    });

    const available = await DOCTORAVAILABILITY.create({
      doctorid: DRdata?._id,
      bookingavailabilityInformation: [
        {
          day: "Sun",
          available: false,
          bookingtime: [],
        },
        {
          day: "Mon",
          available: false,
          bookingtime: [],
        },
        {
          day: "Tue",
          available: false,
          bookingtime: [],
        },
        {
          day: "Wed",
          available: false,
          bookingtime: [],
        },
        {
          day: "Thu",
          available: false,
          bookingtime: [],
        },
        {
          day: "Fri",
          available: false,
          bookingtime: [],
        },
        {
          day: "Sat",
          available: false,
          bookingtime: [],
        },
      ],
    });

    res.status(201).json({
      status: "Successful",
      message: "User SucessFully Added",
      data: {
        Username: data.Username,
        Name: data.Name,
        Email: data.Email,
        phoneNumber: data.phoneNumber,
        DRdata: DRdata?._id,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//======================Add Doctor====================

exports.importManyDoctor = async function (req, res, next) {
  try {
    const userData = [];
    const doctorData = [];
    const availData = [];
    const user = await csv().fromFile(req.file.path);

    for (let i = 0; i < user.length; i++) {
      await userData.push({
        Username: user[i].Username,
        Name: user[i].Name,
        phoneNumber: user[i].phoneNumber,
        Role: user[i].Role,
        Email: user[i].Email,
        Password: await bcrypt.hash(user[i].Password, 10),
      });
    }

    const DATA = await USER?.insertMany(userData);

    for (let i = 0; i < user.length; i++) {
      await doctorData?.push({
        userId: DATA[i]?._id,
        doctorName: user[i]?.Name,
        gender: user[i]?.gender,
        doctorCode: user[i]?.doctorCode,
        departmentName: user[i]?.departmentName,
        departmentCode: user[i]?.departmentCode,
        designation: user[i]?.designation,
        location: user[i]?.location,
        zipcode: user[i]?.zipcode,
        description: user[i]?.description,
        shortDescription: user[i]?.shortDescription,
        specialities: user[i]?.specialities,
        metaTitle: user[i]?.metaTitle,
        ogMetaTitle: user[i]?.ogMetaTitle,
        metaDescription: user[i]?.metaDescription,
        ogMetaDescription: user[i]?.ogMetaDescription,
        metaTags: user[i]?.metaTags,
        price: user[i]?.price,
        yearofexperience: user[i]?.yearofexperience,
        status: user[i]?.status,
        experties: user[i]?.experties,
        experienceInfo: user[i]?.experienceInfo,
        awardAndAchivementsInfo: user[i]?.awardAndAchivementsInfo,
        talkPublicationInfo: user[i]?.talkPublicationInfo,
        languageInfo: user[i]?.languageInfo,
        fellowShipInfo: user[i]?.fellowShipInfo,
        educationInfo: user[i]?.educationInfo,
      });
    }

    const DRDATA = await DOCTOR?.insertMany(doctorData);

    console.log(DRDATA);

    for (let i = 0; i < DRDATA.length; i++) {
      await availData.push({
        doctorid: DRDATA[i]?._id,
        bookingavailabilityInformation: [
          {
            day: "Sun",
            available: false,
            bookingtime: [],
          },
          {
            day: "Mon",
            available: false,
            bookingtime: [],
          },
          {
            day: "Tue",
            available: false,
            bookingtime: [],
          },
          {
            day: "Wed",
            available: false,
            bookingtime: [],
          },
          {
            day: "Thu",
            available: false,
            bookingtime: [],
          },
          {
            day: "Fri",
            available: false,
            bookingtime: [],
          },
          {
            day: "Sat",
            available: false,
            bookingtime: [],
          },
        ],
      });
    }

    
    const AVAILABLE = await DOCTORAVAILABILITY?.insertMany(availData);
console.log(req.file);
     
    await fs.unlinkSync(`./public/uploads/${req?.file?.filename}`);
    res.status(201).json({
      status: "Successful",
      message: "Doctor SucessFully Added",
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================Login Doctor====================

exports.logInDoctor = async function (req, res, next) {
  try {
    const checkUser = await USER.findOne({ phoneNumber: req.body.phoneNumber });

    if (!checkUser) {
      throw new Error("Doctor not found");
    }

    if (checkUser.Role !== "DOCTOR") throw new Error("Not Authorized");

    const checkPass = await bcrypt.compare(
      req.body.Password,
      checkUser.Password
    );

    if (!checkPass) {
      throw new Error("Password is Wrong");
    }
    var token = jwt.sign(
      { id: checkUser._id },
      process.env.JwtSign ||
        `my-32-character-ultra-secure-and-ultra-long-secret`
    );

    const DRdata = await DOCTOR.findOne({ userId: checkUser?.id }).populate(
      "ratings.postedby"
    );
    console.log("DRdata", DRdata);

    res.status(200).json({
      status: "Successful",
      message: "Doctor Login SucessFully",
      data: {
        token: token,
        Username: checkUser.Username,
        Email: checkUser.Email,
        Name: checkUser.Name,
        phoneNumber: checkUser.phoneNumber,
        _id: checkUser._id,
        Role: checkUser.Role,
        Profile: checkUser.Profile,
        gender: checkUser.gender,

        DRdata: DRdata,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================EditDoctor====================

exports.EditDoctor = async function (req, res, next) {
  req.body.token = req.headers.authorization;

  try {
    const getData = await USER.findById(req.params.id);

    var data = { ...getData._doc, ...req.body };
    if (req.body.Password) {
      req.body.Password = await bcrypt.hash(req.body.Password, 10);
    }

    if (req.file) {
      req.body.Profile = req.file.filename;
    }

    const udata = await USER.findByIdAndUpdate(
      req.params.id,
      {
        Username: req?.body?.Username,
        Name: req?.body?.Name,
        Email: req?.body?.Email,
        Password: req?.body?.Password,
        phoneNumber: req?.body?.phoneNumber,
        gender: req?.body?.gender,

        Profile: req.body.Profile,
      },
      { new: true }
    );
    res.status(200).json({
      status: "Suceess",
      message: "Doctor Updated",
      udata: {
        Username: udata.Username,
        Name: udata.Name,
        Email: udata.Email,
        token: req.headers.authorization,
        phoneNumber: udata.phoneNumber,
        Profile: udata.Profile,
        gender: udata.gender,

        _id: req.params.id,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================API endpoint to initiate verification====================
exports.startVerification = async function (req, res) {
  try {
    const phoneNumber = req.body.phoneNumber;

    console.log("req.body", req.body);
    //send verification code only if user is registered and isActive==false

    unverifiedUser = await USER.findOne({
      phoneNumber: phoneNumber,
      isActive: false,
    });

    if (unverifiedUser == null) {
      throw new Error("No Such User Exists");
    } else if (unverifiedUser.isActive == true) {
      throw new Error("User Already Verified");
    } else {
      const verification = await client.verify.v2
        .services(verifySid)
        .verifications.create({ to: phoneNumber, channel: "sms" });

      res.json({ status: verification.status });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

//=======================API endpoint to check verification code====================

exports.checkVerification = async function (req, res) {
  try {
    const phoneNumber = req.body.phoneNumber;
    const otpCode = req.body.otpCode;

    const verificationCheck = await client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: phoneNumber, code: otpCode });

    if (verificationCheck.status == "approved") {
      unverifiedUser = await USER.findOneAndUpdate(
        { phoneNumber: phoneNumber },
        { $set: { isActive: true } },
        { new: true }
      );

      if (unverifiedUser == null) {
        throw new Error("No Such User Exists");
      } else {
        res.json({
          status: verificationCheck.status,
          isActive: unverifiedUser.isActive,
          unverifiedUser,
        });
      }
    } else {
      res.json({ status: verificationCheck.status });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
