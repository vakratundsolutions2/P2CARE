const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tandcSchema = new Schema({ description: String }, { timeseries: true });

const TANDC = mongoose.model("T&C", tandcSchema);

module.exports = TANDC;
