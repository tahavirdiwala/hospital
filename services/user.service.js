const User = require("../models/user.model");

class UserService {
  async addUser(req) {
    return new Promise((resolve, reject) => {
      User.create(req.body).then(resolve).catch(reject);
    });
  }

  async getUsers(req) {
    return new Promise((resolve, reject) => {
      //#region - body
      const { page = 1, limit = 10 } = req.params;
      //#endregion - body

      //#region - selectors
      const selectors = {};
      //#endregion - selectors

      //#region - queries
      User.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);
      //#endregion - queries
    });
  }

  async getUser(req) {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async editUser(req) {
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      User.findByIdAndUpdate(id, req.body).then(resolve).catch(reject);
    });
  }

  async deleteUser(req) {
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      User.findByIdAndDelete(id)
        .then((response) => {
          if (Object.keys(response || {}).length > 0) {
            resolve("User Deleted SuccessFully");
          } else {
            reject("User does not exists");
          }
        })
        .catch(reject);
    });
  }
}

module.exports = new UserService();
