require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const app = express();

start();

async function start() {
  try {
    await connectDb(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
}
