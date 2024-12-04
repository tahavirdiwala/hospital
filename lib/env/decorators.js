require("dotenv").config();

const getEnvConfig = (key) => {
  return process.env[key];
};

module.exports = {
  getEnvConfig,
};
