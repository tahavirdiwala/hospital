const mongoose = require("mongoose");
const Statics = {
  /** @this {mongoose.Model} */
  async findBy(field = {}) {
    return new Promise((resolve, reject) => {
      this.findOne(field)
        .then((response) => {
          if (response) {
            const { password, ...user } = response.toJSON();
            resolve({ user, password });
          } else {
            reject(`User with ${Object.keys(field).toString()} not found`);
          }
        })
        .catch(reject);
    });
  },
};

module.exports = Statics;
