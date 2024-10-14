const { response } = require("express");
require("dotenv").config();

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

const serverConfig = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
};

const SALT_PASSWORD_CONFIG = {
  RANGE: 10,
};

module.exports = {
  sendResponse,
  serverConfig,
  SALT_PASSWORD_CONFIG,
};
