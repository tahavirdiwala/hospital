const mongoose = require("mongoose"),
  Schema = mongoose;

const TeleMedicineSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    sessionDate: {
      type: Date,
    },
    duration: {
      type: Number,
    },
    recorded: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const TeleMedicineSession = mongoose.model(
  "TeleMedicineSession",
  TeleMedicineSchema
);
module.exports = TeleMedicineSession;
