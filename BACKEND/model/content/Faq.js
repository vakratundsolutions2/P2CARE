const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FaqSchema = new Schema({
  question: String,
  answer: String,
  date: Date,
},{timeseries: true});

const FAQ = mongoose.model("faq", FaqSchema);

module.exports = FAQ;
