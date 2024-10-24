const mongoose = require("mongoose"),
  Schema = mongoose;
const commonStatic = require("../utils");

const clinicSchema = new mongoose.Schema(
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
    statics: {
      ...commonStatic.decorators,
    },
  }
);

const Clinic = mongoose.model("Clinic", clinicSchema);
module.exports = Clinic;
