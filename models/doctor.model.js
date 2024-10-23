const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    specialization: {
      type: String,
    },
    rating: {
      type: Number,
    },
    experienceYears: {
      type: Number,
    },
    clinicAddress: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    profilePicture: {
      type: [String],
    },
    availableTimes: {
      type: [Date],
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
