const AuthService = require("../services/authService");
const AuthModel = require("../models/authModel");

const createUser = async (req, res) => {
  const { email, verificationCode } = req.body;
  try {
    if (!email || !verificationCode) {
      return res
        .status(400)
        .json({ message: "Email or Verify Code is require " });
    } else {
      const user = await AuthService.register(email, verificationCode);
      return res.status(201).json({ id: user.id, email: user.email });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Invalid email or verification code" });
  }
};

async function sendOtp(req, res) {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ error: "Email is require" });
    } else {
      const result = await AuthService.sendOtp(email);
      return res.status(200).json({ content: result });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function checkEmail(req, res) {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ error: "Email is require" });
    } else {
      const existing = await AuthService.findUserByEmail(email);
      return res.status(200).json({ exist: existing });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { email, verificationCode } = req.body;
  try {
    if (!email || !verificationCode) {
      return res
        .status(400)
        .json({ message: "Email or Verify Code is require " });
    } else {
      const accessToken = await AuthService.login(email, verificationCode);
      return res.status(200).json({ accessToken: accessToken });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Invalid email or verification code" });
  }
}

async function getUserByEmail(req, res) {
  const { email } = req.body;
  try {
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email or Verify Code is require " });
    } else {
      const accessToken = await AuthModel.getUserByEmail(email);
      return res.status(200).json(accessToken);
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Invalid email or verification code" });
  }
}
module.exports = { createUser, sendOtp, checkEmail, login ,getUserByEmail};
