const mongoose = require("mongoose");

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
        return new Promise((resolve, reject) => {
          this.findOne({ email })
            .then((response) => {
              if (response) {
                const { password, ...user } = response.toJSON();
                resolve({ user, password });
              } else {
                reject(`User with ${email} not found please check your email`);
              }
            })
            .catch(reject);
        });
      },
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
