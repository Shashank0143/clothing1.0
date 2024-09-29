const express = require("express");
const { processPayment, sendRazorpayApiKey, verifyPayment } = require("../controller/razorPaymentController");
const { isAuthentictedUser } = require("../middleWare/auth");
const router  = express.Router();



router.route("/payment/process").post(isAuthentictedUser, processPayment);
router.route("/payment/verify").post(isAuthentictedUser, verifyPayment);

router.route("/Razorpayapikey").get(sendRazorpayApiKey);

module.exports = router