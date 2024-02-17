const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const doctorSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user", required: true },
  patients: [{ type: mongoose.Schema.ObjectId, ref: "user"}],

  doctorName: {
    type: String,
    required: true,
  },
  
  gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male",
  },

  doctorCode: String,
  departmentName: String,
  departmentCode: String,


  designation: String,
  
  
  location: String,
  zipcode: String,
  description: String,
  shortDescription: String,
  specialities: String,
  
  experties: [String],
  experienceInfo: [String],
  awardAndAchivementsInfo: [String],
  talkPublicationInfo: [String],
  languageInfo: [String],
  educationInfo: [String],
  fellowShipInfo: [String],

  metaTitle: String,
  ogMetaTitle: String,
  metaDescription: String,
  ogMetaDescription: String,
  metaTags: String,
  
  price: Number,
  image: String,
  availabileforappointment: {
    type: Boolean,
    default: false,
  },
  yearofexperience: Number,

  isBlocked: {
    type: Boolean,
    default: false,
  },

  isVarified: {
    type: Boolean,
    default: false,
  },
  assign: [
    {
      hospitals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital",
      },
      amount: Number,
      category: String,
    },
  ],

  ratings: [
    {
      star: Number,
      comment: String,
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      date: Date,
    },
  ],
  totalratings: { type: String, default: 0 },
  status: {
    type: String,
    enum: ["publish", "draft"],
    default: "draft",
  },
});


const DOCTOR = mongoose.model('doctor', doctorSchema);

module.exports = DOCTOR;





