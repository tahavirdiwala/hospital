const express = require("express");
const connectDb = require("./db/connect");
const cors = require("cors");
const routes = require("./routes");
const errorConfig = require("./middlewares/errorConfig.middleware");
const { serverConfig } = require("./common/common");
const app = express();

routes(app);
app.all("*", errorConfig.invalidRoute);
app.use(errorConfig.default);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

start();

async function start() {
  try {
    await connectDb(serverConfig.MONGO_URL).then(() => {
      console.log("database connected");
    });
    app.listen(serverConfig.PORT, () => {
      console.log("server is running on " + serverConfig.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
