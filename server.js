const express = require("express");
const connectDb = require("./database/connect");
const errorConfig = require("./middlewares/errorConfig.middleware");
const routes = require("./routes");
const cors = require("cors");
const cookie = require("cookie-parser");
const app = express();
const { SERVER_CONFIG } = require("./lib/constant");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(errorConfig.default);
app.use("/static", express.static("static"));
routes(app);

start();

async function start() {
  try {
    await connectDb(SERVER_CONFIG.MongoUri).then(() => {
      console.log("database connected");
    });
    app.listen(SERVER_CONFIG.PORT, () => {
      console.log("server is running at port " + SERVER_CONFIG.Port);
    });
  } catch (error) {
    console.log(error);
  }
}
