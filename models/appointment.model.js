const mongoose = require("mongoose"),
  Schema = mongoose;

const AppointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    dateTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "canceled"],
      message: "{VALUE} is not supported",
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;
