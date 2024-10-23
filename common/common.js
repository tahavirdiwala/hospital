const { response } = require("express");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { SALT_PASSWORD_CONFIG } = require("../lib/constant");

/**
 * Sends a JSON response with a status code, message, and optional data.
 * @param {response} res - Express response object.
 * @param {number} statusCode - HTTP status code.
 * @param {string} response - Response message.
 * @param {Array|null} [data=null] - Optional response data.
 */

const sendResponse = (res, statusCode, response, data = null) => {
  if (response["message"]) response = response["message"];
  res
    .status(statusCode)
    .json({ statusCode, message: response, ...(data && { data }) });
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

const handleDelete = async (id, Model) => {
  const entity = Object.keys(Model).toString();

  return new Promise((resolve, reject) => {
    Model[entity]
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
