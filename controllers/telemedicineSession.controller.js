const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const telemedicineService = require("../services/telemedicine.service");

class TeleMedicineSessionController {
  async add(req, res) {
    try {
      const telemedicine = await telemedicineService.add(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Tele Medicine Sessions Created SuccessFully",
        telemedicine
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const telemedicines = await telemedicineService.getAll(req);
      sendResponse(
        res,
        StatusCodes.BAD_REQUEST,
        "Tele Medicine Sessions Fetched SuccessFully",
        telemedicines
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const telemedicine = await telemedicineService.get(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Tele Medicine Session Fetched SuccessFully",
        telemedicine
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await telemedicineService.edit(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Tele Medicine Session Updated SuccessFully",
        req.body
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new TeleMedicineSessionController();
