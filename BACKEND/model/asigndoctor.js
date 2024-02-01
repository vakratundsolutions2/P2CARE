const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const asignDoctorSchema = new Schema({
  // hospital: { type: mongoose.Schema.Types.ObjectId, ref: "hospital" },
  // category: { type: mongoose.Schema.Types.ObjectId, ref: "doctorcategory" },
  // doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor" },
  // amount: Number,

  hospital: String,
  category: String,
  doctor: String,
  amount: Number,
});

const ASIGNDOCTOR = mongoose.model("asigndoctor", asignDoctorSchema);

module.exports = ASIGNDOCTOR;
