const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const hospitalSchema = new Schema({
  hospitalname: String,
  hospitaladdress: String,
  description: String,
  openingtime: String,
  closingtime: String,
  shortdescription: String,
  service: [String],
  yearofexperience: Number,

  category: [String],

  hospitallogo: String,
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
    default: "publish",
  },

  assign: [
    {
      amount: Number,
      category: String,
      doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor",
      },
      date: Date,
    },
  ],
});

const HOSPITAL = mongoose.model('hospital', hospitalSchema);

module.exports = HOSPITAL;