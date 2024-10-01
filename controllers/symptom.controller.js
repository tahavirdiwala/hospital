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
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new SymptomController();
