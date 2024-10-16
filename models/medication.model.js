const mongoose = require("mongoose"),
  Schema = mongoose;

const medicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dosage: {
      type: String,
    },
    frequency: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Medication = mongoose.model("Medication", medicationSchema);
module.exports = Medication;
