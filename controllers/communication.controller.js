const { StatusCodes } = require("http-status-codes");
const communicationService = require("../services/communication.service");
const { sendResponse } = require("../common/common");
const {
  RESPONSE_MESSAGE: { communication: MESSAGE },
} = require("../lib/constant");

class CommunicationController {
  async add(req, res) {
    try {
      const communication = await communicationService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, communication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const communications = await communicationService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, communications);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const communication = await communicationService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, communication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await communicationService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit, req.body);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await communicationService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}
module.exports = new CommunicationController();
