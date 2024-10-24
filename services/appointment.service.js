const Appointment = require("../models/appointment.model");
const { handleDelete } = require("../common/common");

class AppointmentService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Appointment.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 10 } = req.query;
      Appointment.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Appointment.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      Appointment.findByIdAndUpdate(req.params.id, req.body)
        .then(resolve)
        .catch(reject);
    });
  }

  async delete(req) {
    return handleDelete(req.params.id, { Appointment });
  }
}

module.exports = new AppointmentService();
