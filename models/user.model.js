const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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
    statics: {
      async findBy(email) {
        const userData = await this.findOne({ email });
        return ({ password, ...user } = userData.toJSON());
      },
    },
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
