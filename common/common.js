const { response } = require("express");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const { SALT_PASSWORD_CONFIG } = require("../lib/constant");
require("dotenv").config();

class CommonDecorators {
  async hashField(password) {
    return await bcrypt.hash(password, SALT_PASSWORD_CONFIG.RANGE);
  }

  async compare(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

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

  validator(fields, body) {
    let message = "";

    fields.some((field) => {
      if (!body[field]) {
        message = `${field} is required`;
        return true;
      }
      return false;
    });

    if (message.length > 0) {
      throw new Error(message);
    }
  }
  /**
   * Sends a JSON response with a status code, message, and optional data.
   * @param {response} response - Express response object.
   * @param {number} statusCode - HTTP status code.
   * @param {string} dispatch - Dispatch Response message.
   * @param {Array|null} [data=null] - Optional response data.
   */
  sendResponse(response, statusCode, dispatch, data = null) {
    if (dispatch["message"]) dispatch = dispatch["message"];
    response
      .status(statusCode)
      .json({ statusCode, message: dispatch, ...(data && { data }) });
  }

  getFiles(dir) {
    return fs.readdirSync(dir);
  }
}

module.exports = new CommonDecorators();
