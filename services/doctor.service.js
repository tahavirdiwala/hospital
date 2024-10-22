const Doctor = require("../models/doctor.model");

class DoctorService {
  async add(req) {
    return new Promise((resolve, reject) => {
      const payload = {
        ...req.body,
        profilePicture: req.file.filename,
      };
      Doctor.create(payload).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;

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
      const payload = {
        ...req.body,
        profilePicture: req.file.filename,
      };

      Doctor.findByIdAndUpdate(req.params.id, payload)
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

  async getAllProfilePic(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;

      const selectors = {
        profilePicture: 1,
      };

      Doctor.find()
        .select(selectors)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then((resp) => {
          const profilePics = resp.map((item) => ({
            ...item.toJSON(),
            profilePicture: `${process.env.CLIENT_URL_PIC}/static/${item?.profilePicture}`,
          }));
          resolve(profilePics);
        })
        .catch(reject);
    });
  }
}

module.exports = new DoctorService();
