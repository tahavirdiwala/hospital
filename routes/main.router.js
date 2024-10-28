const routerPath = [
  "auth",
  "user",
  "symptom",
  "doctor",
  "appointment",
  "communication",
  "payment",
  "clinic",
  "telemedicineSession",
].map((path) => {
  return require(`./${path}.router`);
});

module.exports = routerPath;
