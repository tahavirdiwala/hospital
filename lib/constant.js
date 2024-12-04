require("dotenv").config();
const { getEnvConfig } = require("./env/decorators");

const SERVER_CONFIG = {
  MongoUri: getEnvConfig("MONGO_URL"),
  Port: getEnvConfig("PORT"),
  JwtSecret: getEnvConfig("JWT_SECRET"),
  JwtPassWordResetExpiry: getEnvConfig("JWT_PASSWORD_RESET_EXPIRE"),
  ClientUrl: getEnvConfig("CLIENT_URL"),
};

const SALT_PASSWORD_CONFIG = {
  RANGE: 10,
};

const RESPONSE_MESSAGE = {
  auth: {
    register: "User Registered SuccessFully",
    login: "User Login SuccessFully",
    logout: "User Logout SuccessFully",
    changePassword: "Password Changed SuccessFully",
    forgotPassword:
      "Password reset link was sent to your mail please open your mail",
    resetPassword: "Password reset successfully",
    receiver: {
      from: "somerandom@gmail.com",
      subject: "Password Reset Request",
      text: (
        url
      ) => `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process:\n\n
            ${url}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    },
    transporter: {
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnAuthorized: true,
      },
    },
  },
  user: {
    all: "Users Fetched SuccessFully",
    get: "User Fetched SuccessFully",
    edit: "User Updated SuccessFully",
    delete: "User Deleted SuccessFully",
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
    allProfilePic: "Doctors Profile Pics Fetched SuccessFully",
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
};

module.exports = {
  SERVER_CONFIG,
  SALT_PASSWORD_CONFIG,
  RESPONSE_MESSAGE,
};
