const mongoose = require("mongoose"),
  Schema = mongoose;

const PaymentSchema = new mongoose.Schema(
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
    },
    status: {
      type: String,
      enum: ["successful", "pending", "failed"],
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
