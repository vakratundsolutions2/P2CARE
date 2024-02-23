const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  title: String,
  description: String,
  whychoseus: [
    {
      //  4 steps required
      shorttitle: String,
      shortdescription: String,
      icon: String,
    },
  ],
  bennertitle: String,
  bennerdescription: String, // 20 words
  
  metaTitle: String,
  metaDescription: String,
  metaTags: String,
});

const ABOUT = mongoose.model("about", aboutSchema);

module.exports = ABOUT;
