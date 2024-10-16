const mongoose = require("mongoose"),
  Schema = mongoose;

const symptomsSchema = new mongoose.Schema(
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

const Symptom = mongoose.model("Symptom", symptomsSchema);
module.exports = Symptom;
