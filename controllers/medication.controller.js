const medicationService = require("../services/medication.service");
const { sendResponse } = require("../common/common");
const { StatusCodes } = require("http-status-codes");
const {
  ResponseMessage: { Medication: MESSAGE },
} = require("../lib/constant");

class MedicationController {
  async add(req, res) {
    try {
      const medication = await medicationService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, medication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const medications = await medicationService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, medications);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const medication = await medicationService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, medication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await medicationService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit, req.body);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await medicationService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new MedicationController();
