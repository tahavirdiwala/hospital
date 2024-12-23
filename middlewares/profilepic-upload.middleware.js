const multer = require("multer");
const errorConfig = require("./errorConfig.middleware");
const { StatusCodes } = require("http-status-codes");
const { sendResponse } = require("../common/common");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

function fileFilter(req, file, callback) {
  if (["image/png", "image/jpeg"].includes(file.mimetype)) {
    callback(null, true);
  } else {
    console.log("only jpg & png are supported!");
    callback(null, false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

function uploadDecorator(req, res, next) {
  const uploadFile = upload.array("profilePicture");

  uploadFile(req, res, (error) => {
    try {
      return errorConfig.multerException(error, next);
    } catch (error) {
      sendResponse(res, StatusCodes.BAD_REQUEST, error);
    }
  });
}

module.exports = uploadDecorator;
