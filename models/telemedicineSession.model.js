const mongoose = require("mongoose"),
  Schema = mongoose;
const commonStatic = require("../utils");

const teleMedicineSchema = new mongoose.Schema(
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
    statics: {
      ...commonStatic.decorators,
    },
  }
);

const TeleMedicineSession = mongoose.model(
  "TeleMedicineSession",
  teleMedicineSchema
);
module.exports = TeleMedicineSession;
