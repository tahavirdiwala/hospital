const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");

class ErrorConfig {
  invalidRoute(req, res, next) {
    const err = new Error(`Can't find ${req.originalUrl} on the server`);
    err.statusCode = StatusCodes.NOT_FOUND;
    next(err);
  }

  default(error, req, res, next) {
    error.statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    sendResponse(res, error.statusCode, error.message);
  }
}

module.exports = new ErrorConfig();
