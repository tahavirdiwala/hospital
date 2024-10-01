const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const userService = require("../services/user.service");

class UserController {
  async add(req, res) {
    try {
      const user = await userService.addUser(req);
      sendResponse(res, StatusCodes.CREATED, "User Created SuccessFully", user);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const users = await userService.getAll();
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
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new UserController();
