const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
    console.log(file);
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  
  limits: { fileSize: 200000 },
});


const doctorImageResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/doctor/${file.filename}`);
      fs.unlinkSync(`public/doctor/${file.filename}`);
    })
  );
  next();
};
const doctorCategoryImageResize = async (req, res, next) => {
    
  if (!req.file) return next();

   await sharp(req.file.path)
     .resize(300, 300)
     .toFormat("jpeg")
     .jpeg({ quality: 90 })
     .toFile(`public/doctorcategory/${req.file.filename}`);

    
  next();
};
const userImageResize = async (req, res, next) => {
    
  if (!req.file) return next();

   await  sharp(req.file.path)
      .resize(300, 300)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`public/user/${req.file.filename}`)
  next();
};

const blogImageResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/blog/${file.filename}`);
      fs.unlinkSync(`public/blog/${file.filename}`);
    })
  );
  next();
};

module.exports = {
  uploadPhoto,
  doctorImageResize,
  blogImageResize,
  doctorCategoryImageResize,
  userImageResize,
};
