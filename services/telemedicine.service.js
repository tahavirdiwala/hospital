const TeleMedicineSession = require("../models/telemedicineSession.model");
const { handleDelete } = require("../common/common");

class TeleMedicineSessionService {
  async add(req) {
    return new Promise((resolve, reject) => {
      TeleMedicineSession.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      TeleMedicineSession.findAll({ ...req.query })
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      TeleMedicineSession.findOne({ _id: req.params.id })
        .then(resolve)
        .catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      TeleMedicineSession.findByIdAndUpdate(req.params.id, req.body)
        .then(resolve)
        .catch(reject);
    });
  }

  async delete(req) {
    return handleDelete(req.params.id, { TeleMedicineSession });
  }
}
module.exports = new TeleMedicineSessionService();
