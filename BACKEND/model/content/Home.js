const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  bennertitle: String,
  bennerdescription: String, // 20 words

  howitworks: [{
    //  4 steps required
    shorttitle: String,
    shortdescription: String,
    icon: String,
  }],
});

const HOME = mongoose.model("home", homeSchema);

module.exports = HOME;
