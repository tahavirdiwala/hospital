const Communication = require("../models/communication.model");
const { handleRemoveDocument } = require("../common/common");

class CommunicationService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Communication.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      Communication.findAll({ ...req.query })
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Communication.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      Communication.findByIdAndUpdate(req.params.id, req.body)
        .then(resolve)
        .catch(reject);
    });
  }

  async delete(req) {
    return handleRemoveDocument(req.params.id, { Communication });
  }
}
module.exports = new CommunicationService();
