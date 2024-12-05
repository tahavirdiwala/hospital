const envKeys = [
  "MongoUri",
  "Port",
  "JwtSecret",
  "JwtExpiry",
  "JwtPassWordResetExpiry",
  "ClientUrl",
  "ClientUrlPic",
];

const envValues = [
  "MONGO_URL",
  "PORT",
  "JWT_SECRET",
  "JWT_EXPIRE",
  "JWT_PASSWORD_RESET_EXPIRE",
  "CLIENT_URL",
  "CLIENT_URL_PIC",
];

module.exports = {
  envKeys,
  envValues,
};
