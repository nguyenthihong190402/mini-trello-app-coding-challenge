const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/authRouter");
const boardRoutes = require("./routes/boardRouter");
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRoutes);
app.use("/boards", boardRoutes);

module.exports = app;