const Doctor = require("../models/doctor.model");

class DoctorService {
  async add(req) {
    const payload = {
      ...req.body,
      profilePicture: req.file.filename,
    };
    return new Promise((resolve, reject) => {
      Doctor.create(payload).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.params;

      Doctor.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Doctor.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      Doctor.findByIdAndUpdate(req.params.id, req.body)
        .then(resolve)
        .catch(reject);
    });
  }

  async delete(req) {
    return new Promise((resolve, reject) => {
      Doctor.findByIdAndDelete(req.params.id)
        .then((response) => {
          if (Object.keys(response || {}).length > 0) {
            resolve();
          } else {
            reject("Doctor does not exist");
          }
        })
        .catch(reject);
    });
  }
}

module.exports = new DoctorService();
