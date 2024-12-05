const { request } = require("express");
/**
 * Returns a JSON payload.
 * @param {request} request - Express request object.
 * @returns {object} payload object
 */
function uploadProfilePic(request) {
  return {
    ...request.body,
    ...(request.files.length > 0 && {
      profilePicture: request.files.map((file) => file.filename),
    }),
  };
}

module.exports = uploadProfilePic;
