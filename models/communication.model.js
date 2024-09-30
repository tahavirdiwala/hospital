const mongoose = require("mongoose"),
  Schema = mongoose;

const CommunicationSchema = new mongoose.Schema(
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
  }
);

const Communication = mongoose.model("Communication", CommunicationSchema);
module.exports = Communication;