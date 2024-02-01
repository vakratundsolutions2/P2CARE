const USER = require("../model/user");

const isAdmin = async (req, res, next) => {
  const { phoneNumber } = req.user;
  const adminUser = await USER.findOne({ phoneNumber: phoneNumber });
  if (adminUser.Role !== "ADMIN") {
    throw new Error("You are not Administrator");
  } else {
    next();
  }
};

const isDoctor = async (req, res, next) => {
  const { phoneNumber } = req.user;
  const adminUser = await USER.findOne({ phoneNumber: phoneNumber });
  if (adminUser.Role !== "DOCTOR") {
    res.status(404).json({
      status: "Fail",
      message: "You are not DOCTOR",
    });

    throw new Error("You are not DOCTOR");
  } else {
    next();
  }
}

module.exports = { isAdmin, isDoctor };
