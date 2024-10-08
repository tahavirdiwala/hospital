const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const userService = require("../services/user.service");

class UserController {
  async add(req, res) {
    try {
      const user = await userService.add(req);
      sendResponse(res, StatusCodes.CREATED, "User Created SuccessFully", user);
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
