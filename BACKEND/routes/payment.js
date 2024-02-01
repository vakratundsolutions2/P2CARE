var express = require("express");
var router = express.Router();
const paymentController = require("../controller/payment");
const userController = require("../controller/user");



router.post("/checkout", paymentController.checkout);

router.post(
  "/paymentverification",
  paymentController.paymentVerification
);

module.exports = router;
