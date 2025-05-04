const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

require("dotenv").config();

const userRoutes = require("../src/routes/user.route");
const trainingRoutes = require("../src/routes/training.route");

app.use("/user", userRoutes);
app.use("/training", trainingRoutes);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.get("/", (req, res) => {
  res.send("にほんごをわかりません!");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

module.exports = app;
