require("dotenv").config();
const { SALT_PASSWORD_CONFIG } = require("../lib/constant");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

class UserService {
  async register(req) {
    return new Promise(async (resolve, reject) => {
      try {
        if (Object.values(req.body || {}).some((field) => !field)) {
          reject("Please fill necessary field");
        }

        const salt = await bcrypt.genSalt(SALT_PASSWORD_CONFIG.RANGE);

        const payload = {
          ...req.body,
          password: await bcrypt.hash(req.body.password, salt),
        };

        User.findOne({ email: req.body.email })
          .then((user) => {
            if (user) reject("User already exist please login");
            else User.create(payload).then(resolve).catch(reject);
          })
          .catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  async login(req, res) {
    return new Promise(async (resolve, reject) => {
      try {
        const userData = await User.findOne({ email: req.body.email });
        const { password, ...user } = userData.toJSON();

        if (userData) {
          const validPassword = await bcrypt.compare(
            req.body.password,
            password
          );
          if (validPassword) {
            let token = jwt.sign(
              {
                user,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: process.env.JWT_EXPIRE,
              }
            );

            res.cookie("jwt", token, { expire: process.env.JWT_EXPIRE });

            resolve({ ...user, token });
          } else {
            reject("Password is incorrect");
          }
        } else reject("User does not exist");
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAll(req) {
    return new Promise((resolve, reject) => {
      //#region - body
      const { page = 1, limit = 10 } = req.params;
      //#endregion - body

      //#region - selectors
      const selectors = {};
      //#endregion - selectors

      //#region - queries
      User.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .then(resolve)
        .catch(reject);
      //#endregion - queries
    });
  }

  async get(req) {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: req.params.id }).then(resolve).catch(reject);
    });
  }

  async edit(req) {
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      User.findByIdAndUpdate(id, req.body).then(resolve).catch(reject);
    });
  }

  async delete(req) {
    return new Promise((resolve, reject) => {
      const id = req.params.id;
      User.findByIdAndDelete(id)
        .then((response) => {
          if (Object.keys(response || {}).length > 0) {
            resolve();
          } else {
            reject("User does not exist");
          }
        })
        .catch(reject);
    });
  }

  async logout(req, res) {
    res.clearCookie("jwt");
  }

  async requestedPasswordReset(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const userData = await User.findOne({ email: req.body.email });
        const { password, ...user } = userData.toJSON();

        if (userData) {
          const secret = process.env.JWT_SECRET + password;

          const token = jwt.sign(user, secret, {
            expiresIn: process.env.JWT_PASSWORD_RESET_EXPIRE,
          });

          const resetUrl = `http://localhost:5000/api/user/request-password-reset/?id=${user._id}&token=${token}`;

          const transporter = nodemailer.createTransport({
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
          });

          const options = {
            from: process.env.EMAIL,
            to: "taha@redefinesolutions.com",
            subject: "Password Reset Request",
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process:\n\n
            ${resetUrl}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`,
          };

          await transporter.sendMail(options);
          resolve(resetUrl);
        } else reject("User does not exist");
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new UserService();
