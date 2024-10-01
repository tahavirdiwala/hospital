const { response } = require("express");
/**
 * Sends a JSON response with a status code, message, and optional data.
 * @param {response} res - Express response object.
 * @param {number} statusCode - HTTP status code.
 * @param {string} response - Response message.
 * @param {Array|null} [data=null] - Optional response data.
 */

const sendResponse = (res, statusCode, response, data = null) => {
  if (typeof response === "object" && "message" in response) {
    response = response["message"];
  }
  res
    .status(statusCode)
    .json({ statusCode, message: response, ...(data && { data }) });
};

module.exports = sendResponse;
