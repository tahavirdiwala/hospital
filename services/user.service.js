const { SALT_PASSWORD_CONFIG } = require("../common/common");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

class UserService {
  async register(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (Object.values(req.body || {}).some((field) => !field)) {
          reject("Please fill necessary field");
        }

        const salt = await bcrypt.genSalt(SALT_PASSWORD_CONFIG.RANGE);

        const payload = {
          ...req.body,
          password: await bcrypt.hash(req.body.password, salt),
        };

        User.findOne({ email: req.body.email })
          .then((user) => {
            if (user) reject("User already exists");
            else User.create(payload).then(resolve).catch(reject);
          })
          .catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  async add(req) {
    return new Promise((resolve, reject) => {
      User.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
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
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      User.findByIdAndDelete(id)
        .then((response) => {
          if (Object.keys(response || {}).length > 0) {
            resolve("User Deleted SuccessFully");
          } else {
            reject("User does not exist");
          }
        })
        .catch(reject);
    });
  }
}

module.exports = new UserService();
