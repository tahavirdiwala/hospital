require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user.router");
start();

app.use(cors());
app.use(express.json());

const routers = [userRouter];
const PORT = process.env.PORT;

routers.forEach((item) => {
  app.use("/api", item);
});

async function start() {
  try {
    await connectDb(process.env.MONGO_URL).then(() => {
      console.log("database connected");
    });
    app.listen(PORT, () => {
      console.log("server is running on " + PORT);
    });
  } catch (err) {
    console.log(err);
  }
}
