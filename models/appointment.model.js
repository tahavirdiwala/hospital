const mongoose = require("mongoose"),
  Schema = mongoose;

const AppointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    doctorId: {
      type: String,
    },
    dateTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "canceled"],
    },
  },
  {
    timestamps: true,
  }
);

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);
module.exports = AppointmentModel;