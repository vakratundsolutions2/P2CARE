const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PPSchema = new Schema({ description: String }, { timeseries: true });

const PRIVACYPOLICY = mongoose.model("PrivacyPolicy", PPSchema);

module.exports = PRIVACYPOLICY;
