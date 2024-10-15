require("dotenv").config();
const SERVER_CONFIG = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
};

const SALT_PASSWORD_CONFIG = {
  RANGE: 10,
};

const RESPONSE_MESSAGE = {
  user: {
    register: "User Registered SuccessFully",
    login: "User Login SuccessFully",
    all: "Users Fetched SuccessFully",
    get: "User Fetched SuccessFully",
    edit: "User Updated SuccessFully",
    delete: "User Deleted SuccessFully",
    logout: "User Logout SuccessFully",
    requestPassword:
      "Password reset link was sent to your mail please open your mail",
    resetPassword: "reseting..",
  },
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
  medication: {
    add: "Medication Created SuccessFully",
    all: "Medications Fetched SuccessFully",
    get: "Medication Fetched SuccessFully",
    edit: "Medication Updated SuccessFully",
    delete: "Medication Deleted SuccessFully",
  },
  payment: {
    add: "Payment Created SuccessFully",
    all: "Payments Fetched SuccessFully",
    get: "Payment Fetched SuccessFully",
  },
  symptom: {
    add: "Symptom Created SuccessFully",
    all: "Symptoms Fetched SuccessFully",
    get: "Symptom Fetched SuccessFully",
    edit: "Symptom Updated SuccessFully",
    delete: "Symptom Deleted SuccessFully",
  },
  teleMedicine: {
    add: "TeleMedicine Created SuccessFully",
    all: "TeleMedicines Fetched SuccessFully",
    get: "TeleMedicine Fetched SuccessFully",
    edit: "TeleMedicine Updated SuccessFully",
    delete: "TeleMedicine Deleted SuccessFully",
  },
};

module.exports = {
  RESPONSE_MESSAGE,
  SERVER_CONFIG,
  SALT_PASSWORD_CONFIG,
};
