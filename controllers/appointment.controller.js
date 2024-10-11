const { StatusCodes } = require("http-status-codes");
const appointmentService = require("../services/appointment.service");
const { sendResponse } = require("../common/common");

class AppointmentController {
  async add(req, res) {
    try {
      const appointment = await appointmentService.add(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "Appointment Created SuccessFully",
        appointment
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const appointments = await appointmentService.getAll(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Appointments Fetched SuccessFully",
        appointments
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const appointment = await appointmentService.get(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Appointment Fetched SuccessFully",
        appointment
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await appointmentService.edit(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Appointment Updated SuccessFully",
        req.body
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      const appointment = await appointmentService.delete(req);
      sendResponse(res, StatusCodes.OK, appointment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new AppointmentController();
