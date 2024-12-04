const telemedicineService = require("../services/telemedicine.service");
const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");
const {
  ResponseMessage: { teleMedicine: MESSAGE },
} = require("../lib/constant");

class TeleMedicineSessionController {
  async add(req, res) {
    try {
      const telemedicine = await telemedicineService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, telemedicine);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const telemedicines = await telemedicineService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, telemedicines);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const telemedicine = await telemedicineService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, telemedicine);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await telemedicineService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit, req.body);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await telemedicineService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new TeleMedicineSessionController();
