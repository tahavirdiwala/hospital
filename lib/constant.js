const RESPONSE_MESSAGE = {
  clinic: {
    add: "Clinic Created SuccessFully",
    all: "Clinics Fetched SuccessFully",
    get: "Clinic Fetched SuccessFully",
  },
  appointment: {
    add: "Appointment Created SuccessFully",
    all: "Appointments Fetched SuccessFully",
    get: "Appointment Fetched SuccessFully",
    edit: "Appointment Updated SuccessFully",
    delete: "Appointment Deleted SuccessFully",
  },
  communication: {
    add: "Communication Created SuccessFully",
    all: "Communications Fetched SuccessFully",
    get: "Communication Fetched SuccessFully",
    edit: "Communication Updated SuccessFully",
    delete: "Communication Deleted SuccessFully",
  },
  doctor: {
    add: "Doctor Created SuccessFully",
    all: "Doctors Fetched SuccessFully",
    get: "Doctor Fetched SuccessFully",
    edit: "Doctor Updated SuccessFully",
    delete: "Doctor Deleted SuccessFully",
  },
};

const serverConfig = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
};

const SALT_PASSWORD_CONFIG = {
  RANGE: 10,
};

module.exports = {
  RESPONSE_MESSAGE,
  serverConfig,
  SALT_PASSWORD_CONFIG,
};
