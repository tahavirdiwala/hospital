const express = require("express");
const connectDb = require("./db/connect");
const cors = require("cors");
const routes = require("./routes");
const errorConfig = require("./middleware/errorConfig.middleware");
const { serverConfig } = require("./common/common");
const app = express();
const userRouter = require("./routes/user.router");
const cookie = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use("/api", userRouter);
routes(app);
app.all("*", errorConfig.invalidRoute);
app.use(errorConfig.default);
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
