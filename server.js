require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const app = express();

start();

async function start() {
  try {
    await connectDb(process.env.MONGO_URL);
    const teleMedicine = TeleMedicine.create({
      userId: "66fa8610df89b2df1893a83f",
      doctorId: "66fa90348962d56da70a0fcd",
      sessionDate: Date.now(),
      duration: 2,
      recorded: true,
    });
    await teleMedicine.save();
  } catch (err) {
    console.log(err);
  }
}
