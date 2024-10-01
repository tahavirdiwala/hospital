const { StatusCodes } = require("http-status-codes");
const sendResponse = require("../common/common");
const symptomService = require("../services/symptom.service");

class SymptomController {
  async add(req, res) {
    try {
      const symptom = await symptomService.add(req);
      sendResponse(
        res,
        StatusCodes.CREATED,
        "Symptom Created SuccessFully",
        symptom
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const symptoms = await symptomService.getAll(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Symptoms Fetched SuccessFully",
        symptoms
      );
    } catch (error) {
      console.log("error", error);

      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const symptom = await symptomService.get(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Symptom Fetched SuccessFully",
        symptom
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await symptomService.edit(req);
      sendResponse(res, StatusCodes.OK, "Symptom Updated SuccessFully");
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      const symptom = await symptomService.delete(req);
      sendResponse(res, StatusCodes.OK, symptom);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new SymptomController();
