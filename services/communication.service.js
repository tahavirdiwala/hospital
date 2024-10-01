const Communication = require("../models/communication.model");

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
}
module.exports = new CommunicationService();
