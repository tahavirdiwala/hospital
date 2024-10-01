const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const doctorService = require("../services/doctor.service");

class DoctorController {
  async add(req, res) {
    try {
      const doctor = await doctorService.add(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "Doctor Created SuccessFully",
        doctor
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const doctors = await doctorService.getAll(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Doctors Fetched SuccessFully",
        doctors
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const doctor = await doctorService.get(req);
      sendResponse(res, StatusCodes.OK, "Doctor Fetched SuccessFully", doctor);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await doctorService.edit(req);
      sendResponse(res, StatusCodes.OK, "Doctor Updated SuccessFully");
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      const doctor = await doctorService.delete(req);
      sendResponse(res, StatusCodes.OK, doctor);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new DoctorController();
