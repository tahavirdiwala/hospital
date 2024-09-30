require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const Payment = require("./models/payment.model");
const app = express();

start();

async function start() {
  try {
    await connectDb(process.env.MONGO_URL);
    const payment = await Payment.create({
      userId: "66fa8610df89b2df1893a83f",
      appointmentId: "66fa939bb0ebb08cbfd0c123",
      amount: 500,
      paymentMethod: "UPI",
      status: "successful",
    });
    await payment.save();
  } catch (err) {
    console.log(err);
  }
}
