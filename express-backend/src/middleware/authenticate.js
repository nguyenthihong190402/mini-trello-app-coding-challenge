const jwtToken = require("jsonwebtoken");
require("dotenv").config();
async function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  const user = getUserFromToken(token);
  if (!user) {
    return res.status(403).json({ error: "Invalid or expire token" });
  }
  req.user = user;
  next();
}

async function getUserFromToken(token) {
  try {
    const user = await jwtToken.verify(token, process.env.JWT_SECRET);
    return user;
  } catch (error) {
    return null;
  }
}

module.exports = {authenticate, getUserFromToken};
