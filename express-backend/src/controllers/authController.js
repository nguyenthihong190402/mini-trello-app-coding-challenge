const authModel = require("../models/authModel");

async function getAll(req, res) {
  try {
    const data = await authModel.getAllUser();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll };
