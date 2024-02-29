const mongoose = require("mongoose");
const  crypto = require("crypto");
const bcrypt = require("bcrypt");
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

  refreshToken: { type: String },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});





// Validate the schema before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  // console.log(password , salt) ;
});

// Validate the schema after creating the model // save the schema
userSchema.methods.isPasswordMatch = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.Password);
};

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = await crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 100; // 10 minutes
  return resetToken;
};


const USER = mongoose.model("user", userSchema);
module.exports = USER;
