const Payment = require("../models/payment.model");

class PaymentService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Payment.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;

      Payment.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Payment.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }
}
module.exports = new PaymentService();
