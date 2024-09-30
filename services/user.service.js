const User = require("../models/user.model");

class UserService {
  async addUser(req) {
    return new Promise((resolve, reject) => {
      User.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      User.find().then(resolve).catch(reject);
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }
}

module.exports = new UserService();
