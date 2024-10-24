const Communication = require("../models/communication.model");
const { handleDelete } = require("../common/common");

class CommunicationService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Communication.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      Communication.find().then(resolve).catch(reject);
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
    return handleDelete(req.params.id, { Communication });
  }
}
module.exports = new CommunicationService();
