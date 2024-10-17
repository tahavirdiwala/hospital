require("dotenv").config();
const User = require("../models/user.model");
const { compare, hashField, validate } = require("../common/common");
const { createTokenFor } = require("../middlewares/token.middleware");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { SALT_PASSWORD_CONFIG } = require("../lib/constant");
const {
  RESPONSE_MESSAGE: {
    auth: { receiver, transporter: mailPayload },
  },
} = require("../lib/constant");

class AuthService {
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
        validate(["email", "password"], req.body);

        const { password, user } = await User.findBy(req.body.email);

        if (user) {
          const validPassword = await compare(req.body.password, password);

          if (validPassword) {
            const expiry = process.env.JWT_EXPIRE;
            const token = createTokenFor(user, expiry);

            res.cookie("jwt", token, { expire: expiry });

            resolve(user);
          } else {
            reject("Password is incorrect");
          }
        } else {
          reject("User does not exist");
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async logout(req, res) {
    res.clearCookie("jwt");
  }

  async changePassword(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, currentPassword, newPassword } = req.body;

        const payload = { email, currentPassword, newPassword };

        if (Object.keys(payload).some((field) => !payload[field]))
          reject("Please provide necessary fields");
        else {
          const user = await User.findOne({ email });

          if (user) {
            const validPassword = await compare(currentPassword, user.password);

            if (validPassword) {
              const hashedPassword = await hashField(newPassword);

              await User.updateOne(
                { email },
                { password: hashedPassword }
              ).then(resolve);
            } else reject("Current password does not match");
          } else reject("User not found please register");
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async forgotPassword(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await User.findBy(req.body.email);

        const token = createTokenFor(
          user,
          process.env.JWT_PASSWORD_RESET_EXPIRE
        );

        const url = `${process.env.CLIENT_URL}/auth/reset-password/${token}`;
        const transporter = nodemailer.createTransport(mailPayload);

        const option = {
          ...receiver,
          text: receiver.text(url),
          to: user.email,
        };

        transporter.sendMail(option).then(resolve);
      } catch (error) {
        reject(error);
      }
    });
  }

  async resetPassword(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const { token } = req.params;
        const { password } = req.body;

        if (password) {
          const decode = jwt.verify(token, process.env.JWT_SECRET);

          const user = await User.findOne({ email: decode.email });

          const newPassword = await hashField(password);

          user.password = newPassword;
          await user.save();

          resolve();
        } else reject("Please Provide Password");
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new AuthService();
