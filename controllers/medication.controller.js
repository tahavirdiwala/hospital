const { StatusCodes } = require("http-status-codes");
const medicationService = require("../services/medication.service");
const { sendResponse } = require("../common/common");

class MedicationController {
  async add(req, res) {
    try {
      const medication = await medicationService.add(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "Medic Created SuccessFully",
        medication
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const medications = await medicationService.getAll(req);

      sendResponse(
        res,
        StatusCodes.OK,
        "Medications Fetched SuccessFully",
        medications
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const medication = await medicationService.get(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Medication Fetched SuccessFully",
        medication
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await medicationService.edit(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Medication Updated SuccessFully",
        req.body
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      const medication = await medicationService.delete(req);
      sendResponse(res, StatusCodes.OK, medication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new MedicationController();
