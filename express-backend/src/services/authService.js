const AuthModel = require("../models/authModel");
const nodemailer = require("../config/nodemailer-config");
const jwtToken = require("jsonwebtoken");
const verifyCodeFlag = {};

async function register(email, code) {
  const exist = await AuthModel.findUserByEmail(email);

  if (exist) {
    throw new Error("Email alredy exists");
  } else {
    const verify = await verificationCode(email, code);
    console.log(verify);

    if (verify) {
      return await AuthModel.createUser({
        email,
      });
    } else {
      throw new Error("Please verification code");
    }
  }
}

async function sendOtp(email) {
  try {
    const verifyCode = Math.floor(100000 + Math.random() * 900000);
    const mailOptions = {
      from: process.env.EMAIL_ADRESS,
      to: email,
      subject: "WellCom To Trello App",
      text: "Please paste this verification code to continue: " + verifyCode,
    };
    verifyCodeFlag[email] = verifyCode;
    return await nodemailer.sendMail(mailOptions);
  } catch (error) {
    return { error: error.message };
  }
}

async function verificationCode(email, code) {
  const tempCode = verifyCodeFlag[email];
  if (tempCode && parseInt(code) === tempCode) {
    delete verifyCodeFlag[email];
    return true;
  } else {
    return false;
  }
}

async function findUserByEmail(email) {
  const existing = await AuthModel.findUserByEmail(email);
  return existing;
}

async function login(email, code) {
  if (!email || !code) {
    throw new Error("Email or Code is require");
  }
  if (!AuthModel.findUserByEmail(email)) {
    throw new Error("User not found");
  }
  const verify = await verificationCode(email, code);
  if (verify) {
    const user = await AuthModel.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const accessToken = await generateToken(email, code, user.id);
    return accessToken;
  } else {
    throw new Error("Please verification code");
  }
}

async function generateToken(email, code, userId) {
  const token = jwtToken.sign(
    { email: email, code: code, userId: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.EXPIRES_IN }
  );
  return token;
}

module.exports = {
  register,
  sendOtp,
  findUserByEmail,
  login,
};
