const User = require("../models/user.model");
const { handleRemoveDocument } = require("../common/common");
require("dotenv").config();

class UserService {
  async getAll(req) {
    return new Promise((resolve, reject) => {
      User.findAll({ ...req.query })
        .then(resolve)
        .catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      User.findByIdAndUpdate(id, req.body).then(resolve).catch(reject);
    });
  }

  async delete(req) {
    return handleRemoveDocument(req.params.id, { User });
  }
}

module.exports = new UserService();
