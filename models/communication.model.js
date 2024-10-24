const mongoose = require("mongoose"),
  Schema = mongoose;
const commonStatic = require("../utils");

const communicationSchema = new mongoose.Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
    timestamp: {
      type: Date,
    },
    isRead: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    statics: {
      ...commonStatic.decorators,
    },
  }
);

const Communication = mongoose.model("Communication", communicationSchema);
module.exports = Communication;
