const clinicService = require("../services/clinic.service");
const { sendResponse } = require("../common/common");
const { StatusCodes } = require("http-status-codes");
const {
  ResponseMessage: { Clinic: MESSAGE },
} = require("../lib/constant");

class ClinicController {
  async add(req, res) {
    try {
      const clinic = await clinicService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, clinic);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const clinics = await clinicService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, clinics);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const clinic = await clinicService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, clinic);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new ClinicController();
