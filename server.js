const express = require("express");
const connectDb = require("./database/connect");
const cors = require("cors");
const routes = require("./routes");
const errorConfig = require("./middlewares/errorConfig.middleware");
const app = express();
const userRouter = require("./routes/user.router");
const cookie = require("cookie-parser");
const { SERVER_CONFIG } = require("./lib/constant");

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
    await connectDb(SERVER_CONFIG.MONGO_URL).then(() => {
      console.log("database connected");
    });
    app.listen(SERVER_CONFIG.PORT, () => {
      console.log("server is running on " + SERVER_CONFIG.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
