var express = require("express");
var router = express.Router();
const contentController = require("../controller/content/content");
const userController = require("../controller/user");
const { isAdmin } = require("../middleware/authMidleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    console.log("file", req);

    cb(null, "../public/content");
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    console.log("file", req);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// contact page
router.post("/contact", isAdmin, contentController.addContactPage);
router.put(
  "/contact/:id",
  userController.CHECKJWT,
  isAdmin,
  contentController.editContactPage
);
router.get(
  "/contact/:id",

  contentController.getContactPage
);

// ============================= FAQ============================

router.post(
  "/faq",

  contentController.addFAQ
);
router.get(
  "/faq/:id",

  contentController.GetFAQ
);

router.get(
  "/faq",

  contentController.GetAllFAQ
);
router.put(
  "/faq/:id",
  userController.CHECKJWT,
  isAdmin,
  contentController.EditFAQ
);
router.delete(
  "/faq/:id",
  userController.CHECKJWT,
  isAdmin,
  contentController.removeFAQ
);

module.exports = router;

// ================================ABOUT================================

router.post(
  "/about",

  userController.CHECKJWT,
  isAdmin,
  contentController.addAboutPage
);

router.put(
  "/about/:id",
  // upload.array(),
  userController.CHECKJWT,
  isAdmin,
  contentController.editAboutPage
);
router.get(
  "/about/:id",

  contentController.getAboutPage
);
router.get(
  "/about",

  contentController.getAllAboutPage
);
router.delete(
  "/about",

  contentController.deleteAllAboutPage
);







// ================================HOME================================

router.post(
  "/home",
  
  userController.CHECKJWT,
  isAdmin,
  contentController.addHomePage
);

router.put(
  "/home/:id",
  userController.CHECKJWT,
  isAdmin,
  contentController.editHomePage
);
router.get(
  "/home/:id",

  contentController.getHomePage
);
router.get(
  "/home",

  contentController.getAllHomePage
);
router.delete(
  "/home",

  contentController.deleteAllHomePage
);
