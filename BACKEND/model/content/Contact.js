const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    address: String,
    phone: String,
    email: String,
    map: String,
  },
  { timeseries: true }
);

const CONTACT = mongoose.model("contact", contactSchema);

module.exports = CONTACT;