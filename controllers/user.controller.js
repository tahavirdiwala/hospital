const { StatusCodes } = require("http-status-codes");
const userService = require("../services/user.service");
const { sendResponse } = require("../common/common");

class UserController {
  async register(req, res) {
    try {
      const user = await userService.register(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "User Registered SuccessFully",
        user
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async login(req, res) {
    try {
      const user = await userService.login(req);
      sendResponse(res, StatusCodes.OK, "User Login SuccessFully", user);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const users = await userService.getAll(req);
      sendResponse(res, StatusCodes.OK, "Users Fetched SuccessFully", users);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const user = await userService.get(req);
      sendResponse(res, StatusCodes.OK, "User Fetched SuccessFully", user);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await userService.edit(req);
      sendResponse(res, StatusCodes.OK, "User Updated SuccessFully");
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      const user = await userService.delete(req);
      sendResponse(res, StatusCodes.OK, user);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new UserController();
