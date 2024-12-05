const Medication = require("../models/medication.model");
const { handleRemoveDocument } = require("../common/common");

class MedicationService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Medication.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      Medication.findAll({ ...req.query })
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Medication.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      Medication.findByIdAndUpdate(req.params.id, req.body)
        .then(resolve)
        .catch(reject);
    });
  }

  async delete(req) {
    return handleRemoveDocument(req.params.id, { Medication });
  }
}
module.exports = new MedicationService();
