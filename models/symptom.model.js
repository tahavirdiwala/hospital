const mongoose = require("mongoose"),
  Schema = mongoose;

const SymptomsSchema = new mongoose.Schema(
  {
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
    },
    dateLogged: {
      type: Date,
    },
    severity: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Symptom = mongoose.model("Symptom", SymptomsSchema);
module.exports = Symptom;
