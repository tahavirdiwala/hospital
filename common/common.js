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

const hashPassword = async (userPassword) => {
  return await bcrypt.hash(userPassword, SALT_PASSWORD_CONFIG.RANGE);
};

module.exports = {
  sendResponse,
  hashPassword,
};
