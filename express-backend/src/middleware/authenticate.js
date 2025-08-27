const jwtToken = require("jsonwebtoken");

require("dotenv").config();
async function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader && authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authHeader.split(" ")[1];  
  const user =await getUserFromToken(token);
  
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

module.exports = { authenticate, getUserFromToken };
