const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
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
      type: String,
    },
    availableTimes: {
      type: [Date],
    },
  },
  {
    timestamps: true,
  }
);

const DoctorModel = mongoose.model("Doctor", DoctorSchema);
module.exports = DoctorModel;
