const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: String,
  Name: String,
  Email: String,
  Profile: {
    type: String,
  },
  phoneNumber: String,

  Password: String,

  isActive: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male",
  },
  Role: {
    type: String,
    enum: ["ADMIN", "USER", "DOCTOR"],
    default: "USER",
  },

  isBlocked: {
    type: Boolean,
    default: false,
  },
  // for user only
});

const USER = mongoose.model("user", userSchema);

module.exports = USER;
