var express = require("express");
var router = express.Router();
const hospitalController = require("../controller/hospital");
const userController = require("../controller/user");
const multer = require("multer");
const { isAdmin } = require("../middleware/authMidleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/hospital");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

//addhospital
router.post(
  "/addhospital",
  upload.single("hospitallogo"),
  userController.CHECKJWT,
  isAdmin,
  hospitalController.addHospital
);

//allhospital
router.get("/allhospital", hospitalController.allHospital);

//updatehospital
router.put(
  "/edithospital/:id",
  upload.single("hospitallogo"),
  userController.CHECKJWT,
  isAdmin,
  hospitalController.updateHospital
);
//review Hospital
router.put(
  "/rating",
  userController.CHECKJWT,

  hospitalController.rating
);
//assign Hospital
router.put(
  "/assign",
  userController.CHECKJWT,
  isAdmin,
  hospitalController.asignDoctorHospital
);

//deletehospital
router.delete(
  "/deletehospital/:id",
  userController.CHECKJWT,
  isAdmin,
  hospitalController.deleteHospital
);
//deleteassign
router.delete(
  "/removeassign/:id",
  userController.CHECKJWT,
  isAdmin,
  hospitalController.removeAssign
);

//searchHospital
router.get("/searchhospital/:name", hospitalController.searchHospital);

//searchHospitalbyId
router.get("/searchhospitalbyid/:id", hospitalController.searchHospitalbyId);
router.get(
  "/searchHospitalByFilters",
  hospitalController.searchHospitalByFiltets
);


module.exports = router;
