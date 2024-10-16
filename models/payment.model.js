const mongoose = require("mongoose"),
  Schema = mongoose;

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    appointmentId: {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
    amount: {
      type: Number,
    },
    paymentMethod: {
      type: String,
      enum: ["UPI", "credit/debit card", "net banking"],
      message: "{VALUE} is not supported",
    },
    status: {
      type: String,
      enum: ["successful", "pending", "failed"],
      message: "{VALUE} is not supported",
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
