const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
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
    },
    phoneNumber: {
      type: Number,
      validate: {
        validator: function (value) {
          return /^([0-9]{10}$)/.test(value);
        },
        message: (props) => `${props.value} should be exactly 10 digits long`,
      },
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
  }
);

const User = mongoose.model("User", UsersSchema);
module.exports = User;
