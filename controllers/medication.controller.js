const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const medicationService = require("../services/medication.service");

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
      sendResponse(res, StatusCodes.BAD_REQUEST, error.message);
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
      sendResponse(res, StatusCodes.BAD_REQUEST, error.message);
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
      sendResponse(res, StatusCodes.BAD_REQUEST, error.message);
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
      sendResponse(res, StatusCodes.BAD_REQUEST, error.message);
    }
  }

  async delete(req, res) {
    try {
      const medication = await medicationService.delete(req);
      sendResponse(res, StatusCodes.OK, medication);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error.message);
    }
  }
}

module.exports = new MedicationController();
