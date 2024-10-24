const Payment = require("../models/payment.model");

class PaymentService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Payment.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      Payment.findAll({ ...req.query })
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
