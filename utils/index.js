const commonStatic = {
  decorators: {
    async findAll({ page = 1, limit = 10, populate = [], ...rest }) {
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
