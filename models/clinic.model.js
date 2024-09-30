const mongoose = require("mongoose"),
  Schema = mongoose;

const ClinicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    doctors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Clinic = mongoose.model("Clinic", ClinicSchema);
module.exports = Clinic;
