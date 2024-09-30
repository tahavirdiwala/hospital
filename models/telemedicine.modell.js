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

const TeleMedicine = mongoose.model("TeleMedicine", TeleMedicineSchema);
module.exports = TeleMedicine;
