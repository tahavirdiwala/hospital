require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * Sets a jwt response for specified user.
 * @param {object} user - User fields object.
 * @param {string} expiry - expiry for jwt token.
 */
const createTokenFor = (user, expiry) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: expiry,
  });
};

module.exports = {
  createTokenFor,
};
