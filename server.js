require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

start();
routes(app);

async function start() {
  try {
    await connectDb(process.env.MONGO_URL).then(() => {
      console.log("database connected");
    });
    app.listen(PORT, () => {
      console.log("server is running on " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
