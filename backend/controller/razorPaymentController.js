const Razorpay = require("razorpay");
const crypto = require("crypto");
const asyncWrapper = require("../middleWare/asyncWrapper");
const OrdersModel = require('../model/orderModel');
const { constrainedMemory } = require("process");

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Process the payment and verify it
exports.processPayment = asyncWrapper(async (req, res, next) => {

  try {
    const {amount} = req.body.paymentData;
    const order = await razorpay.orders.create({
      amount: amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    })  
    // console.log('Received payment data:', amount);
    // console.log("order: ", order)
    // Process payment data
    res.status(200).json({ success: true, id: order.id});
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, message: 'Payment processing failed' });
  }
});

exports.verifyPayment = asyncWrapper(async (req, res, next) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, order } = req.body;  
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {

    const existingOrder = await OrdersModel.findOne({ razorpay_order_id });
    if (existingOrder) {
      return res.status(400).json({ success: false, message: 'Order already exists' });
    }
    // If payment is successful, save the order to your database
    try {
      // console.log("razorpay_payment_id: ",razorpay_payment_id)
      // console.log("razorpay_order_id: ",razorpay_order_id)
      // console.log("razorpay_signature",razorpay_signature)
      // console.log("order",order)
      const newOrder = await OrdersModel.create({
        user: order.userId,
        orderItems: order.orderItems,
        shippingInfo: order.shippingInfo,
        paymentInfo: {
          id: razorpay_payment_id,
          status: "succeeded",
        },
        itemsPrice: order.itemsPrice,
        totalPrice: order.totalPrice,
        razorpay_order_id:razorpay_order_id,
        paidAt: Date.now(),
        orderStatus: "Processing",
      });

      res.status(200).json({ success: true, order: newOrder});
    } catch (error) {
      console.error('Error saving order to database:', error);
      res.status(500).json({ success: false, message: 'Failed to save order' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Payment verification failed' });
  }
});


// Send Razorpay API Key to user
exports.sendRazorpayApiKey = asyncWrapper(async (req, res, next) => {
  const key = process.env.RAZORPAY_KEY_ID;
  // console.log("Razorpay publish key from environment: ", key);
  res.status(200).json({ key });
});