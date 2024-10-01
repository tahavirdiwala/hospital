const { response } = require("express");
/**
 * Sends a JSON response with a status code, message, and optional data.
 *
 * @param {response} res - Express response object.
 * @param {number} statusCode - HTTP status code.
 * @param {string} message - Response message.
 * @param {Array|null} [data=null] - Optional response data.
 */

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ statusCode, message, ...(data && { data }) });
};

module.exports = sendResponse;
