const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const clinicService = require("../services/clinic.service");

class ClinicController {
  async add(req, res) {
    try {
      const clinic = await clinicService.add(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "Clinic Created SuccessFully",
        clinic
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const clinics = await clinicService.getAll(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Clinics Fetched SuccessFully",
        clinics
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const clinic = await clinicService.get(req);
      sendResponse(res, StatusCodes.OK, "Clinic Fetched SuccessFully", clinic);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new ClinicController();
