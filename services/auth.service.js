const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createTokenFor } = require("../middlewares/token.middleware");
const { compare, hashField, validator } = require("../common/common");
const {
  SALT_PASSWORD_CONFIG,
  RESPONSE_MESSAGE: { auth },
} = require("../lib/constant");
require("dotenv").config();

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
        validator(["email", "password"], req.body);

        const { password, user } = await User.findBy({ email: req.body.email });

        if (user) {
          const validPassword = await compare(req.body.password, password);

          if (validPassword) {
            const withExpiry = process.env.JWT_EXPIRE;

            const token = createTokenFor(user, withExpiry);

            res.cookie("jwt", token, {
              maxAge: 12 * 60 * 60 * 1000,
              httpOnly: true,
            });

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

              await User.updateOne({ email }, { password: hashedPassword })
                .then(resolve)
                .catch(reject);
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
        const { user } = await User.findBy({ email: req.body.email });

        const token = createTokenFor(
          user,
          process.env.JWT_PASSWORD_RESET_EXPIRE
        );

        const url = `${process.env.CLIENT_URL}/auth/reset-password/${token}`;
        const transporter = nodemailer.createTransport(auth.transporter);

        const option = {
          ...auth.receiver,
          text: auth.receiver.text(url),
          to: user.email,
        };

        transporter.sendMail(option).then(resolve).catch(reject);
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
