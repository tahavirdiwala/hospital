const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const communicationService = require("../services/communication.service");

class CommunicationController {
  async add(req, res) {
    try {
      const communication = await communicationService.add(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "Communication Created SuccessFully",
        communication
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const communications = await communicationService.getAll(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Communications Fetched SuccessFully",
        communications
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const communication = await communicationService.get(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Communication Fetched SuccessFully",
        communication
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await communicationService.edit(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Communication Updated SuccessFully",
        req.body
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      const communication = await communicationService.delete(req);
      sendResponse(res, StatusCodes.OK, communication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}
module.exports = new CommunicationController();
