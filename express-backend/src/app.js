const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/authRouter");
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRoutes);

module.exports = app;