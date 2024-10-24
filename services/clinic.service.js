const Clinic = require("../models/clinic.model");

class ClinicService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Clinic.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;
      Clinic.find()
        .populate("doctors")
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);

      Clinic.find;
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Clinic.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }
}
module.exports = new ClinicService();
