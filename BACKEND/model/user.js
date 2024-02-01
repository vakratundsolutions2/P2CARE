const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
  Username: String,
  Name: String,
  Email: String,
  Password: String,
  ProfilePic: {
    type: String,
  },
  phoneNumber: String,
  isActive: {
    type: Boolean,
    default: false,
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
});

const USER = mongoose.model('user', userSchema);

module.exports = USER