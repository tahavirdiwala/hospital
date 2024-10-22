const mongoose = require("mongoose");
const statics = require("../utils/users/static.util");
const validate = require("../utils/users/validate.util");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      validate: validate.phoneNumber,
    },
    gender: {
      type: String,
    },
    healthGoals: {
      type: [String],
    },
    healthIssues: {
      type: [String],
    },
  },
  {
    timestamps: true,
    statics,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
