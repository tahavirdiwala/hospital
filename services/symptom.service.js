const Symptom = require("../models/symptom.model");
const { handleRemoveDocument } = require("../common/common");

class SymptomService {
  async add(req) {
    return new Promise((resolve, reject) => {
      Symptom.create(req.body).then(resolve).catch(reject);
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      //#region - body
      const { page = 1, limit = 10, userPage = 1, userLimit = 5 } = req.query;
      //#endregion - body

      //#region - filter
      const filter = {
        limit,
        page,
        populate: {
          path: "userId",
          options: {
            skip: (userPage - 1) * userLimit,
            limit: userLimit * 1,
          },
        },
      };
      //#endregion - filter

      //#region - queries
      Symptom.findAll(filter).then(resolve).catch(reject);
      //#endregion - queries
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      Symptom.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      Symptom.findByIdAndUpdate(id, req.body).then(resolve).catch(reject);
    });
  }

  async delete(req) {
    return handleRemoveDocument(req.params.id, { Symptom });
  }
}

module.exports = new SymptomService();
