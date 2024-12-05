const userService = require("../services/user.service");
const { sendResponse } = require("../common/common");
const { StatusCodes } = require("http-status-codes");
const {
  RESPONSE_MESSAGE: { user: MESSAGE },
} = require("../lib/constant");

class UserController {
  async getAll(req, res) {
    try {
      const users = await userService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, users);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const user = await userService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, user);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await userService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await userService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new UserController();
