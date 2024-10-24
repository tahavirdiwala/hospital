const Clinic = require("../models/clinic.model");

class ClinicService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Clinic.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      Clinic.findAll({ ...req.query })
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Clinic.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }
}
module.exports = new ClinicService();
