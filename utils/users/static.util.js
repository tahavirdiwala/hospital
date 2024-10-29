const mongoose = require("mongoose");
const Statics = {
  /** @this {mongoose.Model} */
  async findBy(email) {
    return new Promise((resolve, reject) => {
      this.findOne({ email })
        .then((response) => {
          if (response) {
            const { password, ...user } = response.toJSON();
            resolve({ user, password });
          } else {
            reject(`User with ${email} not found`);
          }
        })
        .catch(reject);
    });
  },
};

module.exports = Statics;
