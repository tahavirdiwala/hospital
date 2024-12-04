const authService = require("../services/auth.service");
const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");
const {
  ResponseMessage: { auth: MESSAGE },
} = require("../lib/constant");

class AuthController {
  async register(req, res) {
    try {
      const response = await authService.register(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.register, response);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async login(req, res) {
    try {
      const user = await authService.login(req, res);
      sendResponse(res, StatusCodes.OK, MESSAGE.login, user);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async logout(req, res) {
    try {
      await authService.logout(req, res);
      sendResponse(res, StatusCodes.OK, MESSAGE.logout);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async changePassword(req, res) {
    try {
      await authService.changePassword(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.changePassword);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async forgotPassword(req, res) {
    try {
      await authService.forgotPassword(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.forgotPassword);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async resetPassword(req, res) {
    try {
      const response = await authService.resetPassword(req, res);
      sendResponse(res, StatusCodes.OK, MESSAGE.resetPassword, response);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new AuthController();
