const { envKeys, envValues } = require("./env");
const { getEnvConfig } = require("./env/decorators");

/**
 * @type {Record<"MongoUri" | "Port" | "JwtSecret" | "JwtExpiry" | "JwtPassWordResetExpiry" | "ClientUrl" | "ClientUrlPic", string>}
 */

const ServerConfig = envValues.reduce(
  (acc, curr, index) => ({ ...acc, [envKeys[index]]: getEnvConfig(curr) }),
  {}
);

const SaltPasswordConfig = {
  Range: 10,
};

const ResponseMessage = {
  Auth: {
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
  User: {
    all: "Users Fetched SuccessFully",
    get: "User Fetched SuccessFully",
    edit: "User Updated SuccessFully",
    delete: "User Deleted SuccessFully",
  },
  Clinic: {
    add: "Clinic Created SuccessFully",
    all: "Clinics Fetched SuccessFully",
    get: "Clinic Fetched SuccessFully",
  },
  Appointment: {
    add: "Appointment Created SuccessFully",
    all: "Appointments Fetched SuccessFully",
    get: "Appointment Fetched SuccessFully",
    edit: "Appointment Updated SuccessFully",
    delete: "Appointment Deleted SuccessFully",
  },
  Communication: {
    add: "Communication Created SuccessFully",
    all: "Communications Fetched SuccessFully",
    get: "Communication Fetched SuccessFully",
    edit: "Communication Updated SuccessFully",
    delete: "Communication Deleted SuccessFully",
  },
  Doctor: {
    add: "Doctor Created SuccessFully",
    all: "Doctors Fetched SuccessFully",
    get: "Doctor Fetched SuccessFully",
    edit: "Doctor Updated SuccessFully",
    delete: "Doctor Deleted SuccessFully",
    allProfilePic: "Doctors Profile Pics Fetched SuccessFully",
  },
  Symptom: {
    add: "Symptom Created SuccessFully",
    all: "Symptoms Fetched SuccessFully",
    get: "Symptom Fetched SuccessFully",
    edit: "Symptom Updated SuccessFully",
    delete: "Symptom Deleted SuccessFully",
  },
  TeleMedicine: {
    add: "TeleMedicine Created SuccessFully",
    all: "TeleMedicines Fetched SuccessFully",
    get: "TeleMedicine Fetched SuccessFully",
    edit: "TeleMedicine Updated SuccessFully",
    delete: "TeleMedicine Deleted SuccessFully",
  },
  Medication: {
    add: "Medication Created SuccessFully",
    all: "Medications Fetched SuccessFully",
    get: "Medication Fetched SuccessFully",
    edit: "Medication Updated SuccessFully",
    delete: "Medication Deleted SuccessFully",
  },
  Payment: {
    add: "Payment Created SuccessFully",
    all: "Payments Fetched SuccessFully",
    get: "Payment Fetched SuccessFully",
  },
};

module.exports = {
  ServerConfig,
  SaltPasswordConfig,
  ResponseMessage,
};
