const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");
const { ServerConfig } = require("../lib/constant");

const verifyAuthToken = async (req, res, next) => {
  try {
    return checkUserAuthentication(req, res, next);
  } catch (error) {
    sendResponse(res, StatusCodes.BAD_REQUEST, error);
  }
};

function checkUserAuthentication(req, res, next) {
  let token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, ServerConfig.JwtSecret, (error, tokenResponse) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          throw new Error("Unauthorized - Token has expired");
        } else {
          throw new Error("Unauthorized - " + error.message);
        }
      } else {
        req.user = tokenResponse;
      }
    });
  } else {
    throw new Error("Unauthorized - Session has expired please login again");
  }
  next();
}

module.exports = {
  verifyAuthToken,
};
