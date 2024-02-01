const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookappointmentSchema = new Schema({
  doctor: { type: mongoose.Schema.ObjectId, ref: "doctor", required: true },
  date: { type: Date },

  time: String,

  // user : [{type : mongoose.Schema.ObjectId, ref: 'user', required: true },
  // { type: mongoose.Schema.ObjectId, ref: 'patient' }],
  user: { type: mongoose.Schema.ObjectId, ref: "user", required: true },

  isAccepted: { type: Boolean, default: false },
  // amount :{type:Number,required:true},
  name: String,
  email: String,
  category: String,
  gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male",
  },
  message: String,
  transactionid: String,
});

const BOOKAPPOINTMENT = mongoose.model('bookappointment', bookappointmentSchema);

module.exports = BOOKAPPOINTMENT