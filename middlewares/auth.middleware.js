require("dotenv").config();
const jwt = require("jsonwebtoken");
const { sendResponse } = require("../common/common");
const { StatusCodes } = require("http-status-codes");

const applyAuthentication = async (req, res, next) => {
  try {
    return checkUserAuthentication(req, res, next);
  } catch (error) {
    sendResponse(res, StatusCodes.BAD_REQUEST, error);
  }
};

function checkUserAuthentication(req, res, next) {
  let token = req.cookies.jwt;

  if (token) {
    let decoded;

    jwt.verify(token, process.env.JWT_SECRET, (error, tokenRes) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          throw new Error("Unauthorized - Token has expired");
        } else {
          throw new Error("Unauthorized- " + error.message);
        }
      } else {
        decoded = tokenRes;
      }
    });
  } else {
    throw new Error("Unauthorized - User must be login");
  }
  next();
}

module.exports = {
  applyAuthentication,
};
