const Doctor = require("../models/doctor.model");
const { handleDelete } = require("../common/common");
const uploadProfilePic = require("../utils/doctors/payload.util");

class DoctorService {
  async add(req) {
    return new Promise((resolve, reject) => {
      const payload = uploadProfilePic(req);
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
      const payload = uploadProfilePic(req);

      Doctor.findByIdAndUpdate(req.params.id, payload)
        .then(resolve)
        .catch(reject);
    });
  }

  async delete(req) {
    return handleDelete(req.params.id, { Doctor });
  }

  async getAllProfilePic(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;

      Doctor.aggregate([
        {
          $project: {
            profilePicture: {
              $map: {
                input: "$profilePicture",
                as: "profilePicture",
                in: {
                  $concat: [
                    `${process.env.CLIENT_URL_PIC}/static/`,
                    "$$profilePicture",
                  ],
                },
              },
            },
          },
        },
        {
          $redact: {
            $cond: {
              if: {
                $gt: [{ $size: "$profilePicture" }, 0],
              },
              then: "$$DESCEND",
              else: "$$PRUNE",
            },
          },
        },
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit * 1,
        },
      ])
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = new DoctorService();
