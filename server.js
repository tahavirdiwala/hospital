require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const cors = require("cors");
const routes = require("./routes");
const errorConfig = require("./middlewares/errorConfig.middleware");
const app = express();

routes(app);
app.all("*", errorConfig.invalidRoute);
app.use(errorConfig.default);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT;

start();

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
