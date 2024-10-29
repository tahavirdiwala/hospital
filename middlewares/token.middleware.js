const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Sets a jwt response for given user.
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
