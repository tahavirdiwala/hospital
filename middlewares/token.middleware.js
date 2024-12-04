const jwt = require("jsonwebtoken");
const { SERVER_CONFIG } = require("../lib/constant");

/**
 * Sets a jwt response for given user.
 * @param {object} user - User fields object.
 * @param {string} expiry - expiry for jwt token.
 */
const createTokenFor = (user, expiry) => {
  return jwt.sign(user, SERVER_CONFIG.JwtSecret, {
    expiresIn: expiry,
  });
};

module.exports = {
  createTokenFor,
};
