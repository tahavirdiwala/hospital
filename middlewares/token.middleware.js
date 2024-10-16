require("dotenv").config();
const jwt = require("jsonwebtoken");

const createTokenFor = (user, expiry) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: expiry,
  });
};

module.exports = {
  createTokenFor,
};
