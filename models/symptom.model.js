const mongoose = require("mongoose"),
  Schema = mongoose;
const commonStatic = require("../utils");

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
    statics: {
      ...commonStatic.decorators,
    },
  }
);

const Symptom = mongoose.model("Symptom", symptomsSchema);
module.exports = Symptom;
