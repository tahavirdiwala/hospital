const { response } = require("express");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { SALT_PASSWORD_CONFIG } = require("../lib/constant");

/**
 * Sends a JSON response with a status code, message, and optional data.
 * @param {response} response - Express response object.
 * @param {number} statusCode - HTTP status code.
 * @param {string} dispatch - Dispatch Response message.
 * @param {Array|null} [data=null] - Optional response data.
 */

const sendResponse = (response, statusCode, dispatch, data = null) => {
  if (dispatch["message"]) dispatch = dispatch["message"];
  response
    .status(statusCode)
    .json({ statusCode, message: dispatch, ...(data && { data }) });
};

const hashField = async (password) => {
  return await bcrypt.hash(password, SALT_PASSWORD_CONFIG.RANGE);
};

const compare = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const validate = (fields, body) => {
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
};

const handleDelete = async (id, model) => {
  const entity = Object.keys(model).toLocaleString();

  return new Promise((resolve, reject) => {
    model[entity]
      .findByIdAndDelete(id)
      .then((response) => {
        if (Object.keys(response || {}).length > 0) {
          resolve();
        } else {
          reject(`${entity} does not exist`);
        }
      })
      .catch(reject);
  });
};

module.exports = {
  compare,
  validate,
  hashField,
  sendResponse,
  handleDelete,
};
