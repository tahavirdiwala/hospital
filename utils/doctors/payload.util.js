function uploadProfilePic(request) {
  return {
    ...request.body,
    ...(request.files.length > 0 && {
      profilePicture: request.files.map((file) => file.filename),
    }),
  };
}

module.exports = uploadProfilePic;
