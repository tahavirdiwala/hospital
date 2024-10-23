function uploadProfilePic(request) {
  return {
    ...request.body,
    ...(request.files && {
      profilePicture: request.files.map((file) => file.filename),
    }),
  };
}

module.exports = uploadProfilePic;
