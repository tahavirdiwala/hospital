const { default: mongoose } = require("mongoose");
const commonStatic = require("../utils");
const { getFiles } = require("../common/common");

const files = getFiles(__dirname);
files.splice(files.indexOf("main.model.js"), 1);

/** @type { Record<"communication" | "clinic" | "appointment" | "doctor" | "medication" | "payment" | "symptom" | "telemedicineSession" | "user", mongoose.Model> } */
const modelMapper = files.reduce((acc, key) => {
  /** @type { mongoose.Model } */
  const value = require(`./${key}`);
  value.schema.statics = { ...commonStatic.decorators };
  acc[key.slice(0, key.indexOf("."))] = value;
  return acc;
}, {});

module.exports = modelMapper;
