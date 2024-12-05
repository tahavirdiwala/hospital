const { response } = require("express");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const { SaltPasswordConfig } = require("../lib/constant");

class CommonDecorators {
  /**
   * @param {string} password - Password string for hashing.
   * @returns {Promise<string>} hash converted password field
   */
  async hashField(password) {
    return await bcrypt.hash(password, SaltPasswordConfig.Range);
  }
  /**
   * @param {string} password - current-password string for hashing.
   * @param {string} hashedPassword - compare with hashed password.
   * @returns {Promise<boolean>} whether current password is valid or not
   */
  async compare(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
  /**
   * @param {string} id - id for deleting given password.
   * @param {mongoose.Model} model - parameter for mongoose model.
   */
  async handleRemoveDocument(id, model) {
    const entity = Object.keys(model || {}).toLocaleString();
    /**
     * @type {mongoose.Model}
     */
    const Model = model[entity];

    return new Promise((resolve, reject) => {
      Model.findByIdAndDelete(id)
        .then((response) => {
          if (Object.keys(response || {}).length > 0) {
            resolve();
          } else {
            reject(`${entity} does not exist`);
          }
        })
        .catch(reject);
    });
  }
  /**
   * Sends a JSON response with a status code, message, and optional data.
   * @param {response} response - Express response object.
   * @param {number} statusCode - HTTP status code.
   * @param {string} dispatch - Dispatch Response message.
   * @param {Array|null} [data=null] - Optional response data.
   * @returns {void} response json
   */
  sendResponse(response, statusCode, dispatch, data = null) {
    if (dispatch["message"]) dispatch = dispatch["message"];
    response
      .status(statusCode)
      .json({ statusCode, message: dispatch, ...(data && { data }) });
  }
  /**
   * @param {string} dir - current directory for files.
   * @returns {string[]} all files inside current directory
   */
  getFiles(dir) {
    return fs.readdirSync(dir);
  }
}

module.exports = new CommonDecorators();
