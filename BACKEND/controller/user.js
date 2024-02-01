const USER = require("../model/user");
const DOCTOR = require("../model/doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const twilio = require("twilio");

// Twilio credentials
const accountSid = process.env.twilioAccountSid;
const authToken = process.env.twilioAuthToken;
const verifySid = process.env.twilioVerifySid;
const client = twilio(accountSid, authToken);

//==================================checkToken===============
https: exports.CHECKJWT = async function (req, res, next) {
  try {
    const token = req.headers.authorization;
    console.log(req.headers.authorization);

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
    const checkUser = await USER.findOne({ phoneNumber: req.body.phoneNumber });

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
      Role :'USER'
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
  console.log("req.body", req.body);
  try {
    const getData = await USER.findById(req.params.id);

    var data = { ...getData._doc, ...req.body };
    if (req.body.Password) {
      req.body.Password = await bcrypt.hash(req.body.Password, 10);
    }

    if (req.file) {
      req.body.profileImage = req.file.filename;
    }

    const udata = await USER.findByIdAndUpdate(
      req.params.id,
      {
        Username: data?.Username,
        Name: data?.Name,
        Email: data?.Email,
        Password: data?.Password,
        phoneNumber: data?.phoneNumber,
        isBlocked: data?.isBlocked,
        ProfilePic: data?.ProfilePic,
        Role: data?.Role,
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
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

//=======================logout====================

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


    //doctor.js entry-> data._id
    //step1 check if(data._id )



      const DOCTOREXIST = await DOCTOR.findOne({_id:data._id});
      if(DOCTOREXIST){
              throw new Error("This Doctor already exist");

      }
      const DRdata = await DOCTOR.create({ userId: data._id, doctorName :data.Name});

    res.status(201).json({
      status: "Successful",
      message: "User SucessFully Added",
      data: {
        Username: data.Username,
        Name: data.Name,
        Email: data.Email,
        phoneNumber: data.phoneNumber,
        DRdata:DRdata?._id
      },
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
  try {
    const getData = await USER.findById(req.params.id);

    var data = { ...getData._doc, ...req.body };
    if (req.body.Password) {
      req.body.Password = await bcrypt.hash(req.body.Password, 10);
    }

    

    if (req.file) {
      req.body.profileImage = req.file.filename;
    }



    const udata = await USER.findByIdAndUpdate(
      req.params.id,
      {
        Username: req?.body?.Username,
        Name: req?.body?.Name,
        Email: req?.body?.Email,
        Password: req?.body?.Password,
        phoneNumber: req?.body?.phoneNumber,
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
    // client.verify.v2
    //   .services(verifySid)
    //   .verifications("VEb4e6fad8425ed6d261b13c6c55879839")
    //   .update({ status: "approved" })
    //   .then((verification) => console.log(verification.status));

    //if status is approved make user Active
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
