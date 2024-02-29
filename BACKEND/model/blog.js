const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const blogSchema = new Schema(
  {
    title: String,
    blogcontent: String,
    author: String,
    slug: String,
    blogtags: String,
    // metatag: [String],
    metatag: String,
    metatitle: String,
    ogmetatitle: String,
    metadescription: String,
    ogmetadescription: String,
    ogmetaimage: String,
    
    blogimage: String,
    category: String,
    status: {
      type: String,
      enum: ["publish", "draft"],
      default: "draft",
    },
    // date:DATE.now()
  },
  { timestamps: true }
);


const BLOG = mongoose.model('blog', blogSchema);

module.exports = BLOG;


