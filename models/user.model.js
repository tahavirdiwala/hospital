const mongoose = require("mongoose");
const validate = require("../utils/users/validate.util");
const statics = require("../utils/users/static.util");
const commonStatic = require("../utils");

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
    statics: {
      ...statics,
      ...commonStatic.decorators,
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
