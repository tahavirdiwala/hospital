const paymentService = require("../services/payment.service");
const { sendResponse } = require("../common/common");
const { StatusCodes } = require("http-status-codes");
const {
  RESPONSE_MESSAGE: { payment: MESSAGE },
} = require("../lib/constant");

class PaymentController {
  async add(req, res) {
    try {
      const payment = await paymentService.add(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.add, payment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const payment = await paymentService.getAll(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.all, payment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const payment = await paymentService.get(req);
      sendResponse(res, StatusCodes.OK, MESSAGE.get, payment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_GATEWAY, error);
    }
  }
}
module.exports = new PaymentController();
