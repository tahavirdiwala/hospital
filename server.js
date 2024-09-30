require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const Medication = require("./models/medication.model");
const app = express();

start();

async function start() {
  try {
    await connectDb(process.env.MONGO_URL);
    console.log("..db connected");
  } catch (err) {
    console.log(err);
  }
}
