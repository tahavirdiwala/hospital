const { StatusCodes } = require("http-status-codes");
const appointmentService = require("../services/appointment.service");
const { sendResponse } = require("../common/common");
const {
  RESPONSE_MESSAGE: { appointment: MESSAGE },
} = require("../lib/constant");

class AppointmentController {
  async add(req, res) {
    try {
      const appointment = await appointmentService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, appointment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const appointments = await appointmentService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, appointments);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const appointment = await appointmentService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, appointment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await appointmentService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit, req.body);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await appointmentService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new AppointmentController();
