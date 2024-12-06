const mongoose = require("mongoose");
const commonStatic = {
  decorators: {
    /**
     * @param {import("express").Request} payload has one argument name payload for every get api request
     * @returns {mongoose.Model} mongoose find query promise with predefined pagination and population by default
     */
    async findAll(payload = {}) {
      const { page = 1, limit = 10, populate = [], ...rest } = payload;
      return new Promise((resolve, reject) => {
        this.find(rest)
          .populate(populate)
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .then(resolve)
          .catch(reject);
      });
    },
  },
};

module.exports = commonStatic;
