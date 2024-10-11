const { StatusCodes } = require("http-status-codes");
const paymentService = require("../services/payment.service");
const { sendResponse } = require("../common/common");

class PaymentController {
  async add(req, res) {
    try {
      const payment = await paymentService.add(req);
      sendResponse(res, StatusCodes.OK, "Payment Paid SuccessFully", payment);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async getAll(req, res) {
    try {
      const payment = await paymentService.getAll(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Payments Fetched SuccessFully",
        payment
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  }

  async get(req, res) {
    try {
      const payment = await paymentService.get(req);
      sendResponse(
        res,
        StatusCodes.OK,
        "Payment Fetched SuccessFully",
        payment
      );
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_GATEWAY, error);
    }
  }
}
module.exports = new PaymentController();
