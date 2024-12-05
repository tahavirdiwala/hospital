const symptomService = require("../services/symptom.service");
const { sendResponse } = require("../common/common");
const { StatusCodes } = require("http-status-codes");
const {
  ResponseMessage: { Symptom: MESSAGE },
} = require("../lib/constant");

class SymptomController {
  async add(req, res) {
    try {
      const symptom = await symptomService.add(req);
      sendResponse(res, StatusCodes.CREATED, MESSAGE.add, symptom);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const symptoms = await symptomService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, symptoms);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const symptom = await symptomService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, symptom);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async edit(req, res) {
    try {
      await symptomService.edit(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.edit);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async delete(req, res) {
    try {
      await symptomService.delete(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.delete);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }
}

module.exports = new SymptomController();
