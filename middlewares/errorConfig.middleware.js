const multer = require("multer");
const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");

class ErrorConfig {
  /**
   * @param {Error} error error object
   * @param {Request} req request object
   * @param {Response} res response object
   * @param {import("express").NextFunction} next next function
   * @returns json response
   */
  default(error, req, res, next) {
    error.statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    sendResponse(res, error.statusCode, error.message);
  }

  /**
   * @param {Error} error error mapper
   * @param {import("express").NextFunction} next next function
   * @returns check for multer exception if there is it will throw an error
   */
  multerException(error, next) {
    if (error instanceof multer.MulterError) {
      throw new Error(error);
    } else if (error) {
      throw new Error(error);
    } else {
      next();
    }
  }
}

module.exports = new ErrorConfig();
