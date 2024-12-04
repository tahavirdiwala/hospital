const doctorService = require("../services/doctor.service");
const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");
const {
  ResponseMessage: { Doctor: MESSAGE },
} = require("../lib/constant");

class DoctorController {
  async add(req, res) {
    try {
      const doctor = await doctorService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, doctor);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const doctors = await doctorService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, doctors);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const doctor = await doctorService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, doctor);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await doctorService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await doctorService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAllProfile(req, res) {
    try {
      const profilePics = await doctorService.getAllProfilePic(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.allProfilePic, profilePics);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new DoctorController();
