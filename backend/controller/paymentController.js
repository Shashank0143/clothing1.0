// const { default: Stripe } = require("stripe");
// const asyncWrapper = require("../middleWare/asyncWrapper");
// process the payment
// exports.processPayment = asyncWrapper(async (req, res, next) => {
//   const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // asigning key as well

//   const myPayment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "inr",
//     metadata: {
//       company: "Ecommerce", // not mandatory
//     },
//   });

//   res
//     .status(200)
//     .json({ sucess: true, client_secret: myPayment.client_secret });
// });

// send STRIPE_API_KEY to user =>

// exports.sendStripeApiKey = asyncWrapper(async (req, res, next) => {
//   const stripe = Stripe(process.env.STRIPE_API_KEY)
//   res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY});
//   console.log("Stripe publish key from sendStripeKey: ", process.env.STRIPE_API_KEY)
// });




// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// const asyncWrapper = require("../middleWare/asyncWrapper");

// // Process the payment and verify it
// exports.processPayment = asyncWrapper(async (req, res, next) => {
//   const { amount, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//   try {
//     // Create a new payment order
//     const payment = await razorpay.orders.create({
//       amount: amount * 100, // amount in the smallest currency unit (paise)
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//       notes: {
//         company: "Ecommerce", // not mandatory
//       },
//     });

//     // Verify payment
//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body.toString())
//       .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       res.status(200).json({ success: true, order_id: payment.id, status: "success" });
//     } else {
//       res.status(400).json({ success: false, status: "failure" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error creating or verifying payment");
//   }
// });


// // Send Razorpay API Key to user
// exports.sendRazorpayApiKey = asyncWrapper(async (req, res, next) => {
//   res.status(200).json({ razorpayKeyId: process.env.RAZORPAY_KEY_ID });
// });


