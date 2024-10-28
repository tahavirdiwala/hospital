module.exports = [
  "auth",
  "user",
  "symptom",
  "doctor",
  "appointment",
  "communication",
  "payment",
  "clinic",
  "telemedicineSession",
].map((path) => require(`./${path}.router`));
