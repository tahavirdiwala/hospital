require("dotenv").config();

const getEnvConfig = (key) => {
  if (process.env[key]) return process.env[key];
  else throw new Error("value does not exist");
};

module.exports = {
  getEnvConfig,
};
