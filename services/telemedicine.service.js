const TeleMedicineSession = require("../models/telemedicineSession.model");

class TeleMedicineSessionService {
  async add(req) {
    return new Promise((resolve, reject) => {
      TeleMedicineSession.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      TeleMedicineSession.find().then(resolve).catch(reject);
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
    return new Promise((resolve, reject) => {
      TeleMedicineSession.findByIdAndDelete(req.params.id)
        .then((response) => {
          if (Object.keys(response || {}).length > 0) {
            resolve();
          } else {
            reject("Telemedicine Session does not exist");
          }
        })
        .catch(reject);
    });
  }
}
module.exports = new TeleMedicineSessionService();
