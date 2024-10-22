const express = require("express");
const connectDb = require("./database/connect");
const cors = require("cors");
const routes = require("./routes");
const errorConfig = require("./middlewares/errorConfig.middleware");
const app = express();
const cookie = require("cookie-parser");
const { SERVER_CONFIG } = require("./lib/constant");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
routes(app);
app.all("*", errorConfig.invalidRoute);
app.use(errorConfig.default);
app.use("/static", express.static("static"));

start();

async function start() {
  try {
    await connectDb(SERVER_CONFIG.MONGO_URL).then(() => {
      console.log("database connected");
    });
    app.listen(SERVER_CONFIG.PORT, () => {
      console.log("server is running at port " + SERVER_CONFIG.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
