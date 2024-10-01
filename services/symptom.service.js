const Symptom = require("../models/symptom.model");

class SymptomService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Symptom.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.params;

      Symptom.find()
        .populate("userId")
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = new SymptomService();
