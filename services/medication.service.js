const { handleDelete } = require("../common/common");
const Medication = require("../models/medication.model");

class MedicationService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Medication.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;
      Medication.find()
        .populate("userId")
        .limit(limit * 1)
        .skip((page - 1) * limit)
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
    return handleDelete(req.params.id, { Medication });
  }
}
module.exports = new MedicationService();
