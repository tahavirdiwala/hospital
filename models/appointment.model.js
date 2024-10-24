const mongoose = require("mongoose"),
  Schema = mongoose;

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    dateTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "canceled"],
      message: "{VALUE} is not supported",
    },
  },
  {
    timestamps: true,
    statics: {
      async findAll({ page = 1, limit = 10, populate = [], ...rest }) {
        return new Promise((resolve, reject) => {
          this.find(rest)
            .populate(populate)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .then(resolve)
            .catch(reject);
        });
      },
    },
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
