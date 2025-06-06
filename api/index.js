const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

require("dotenv").config();

const userRoutes = require("../src/routes/user.route");
const trainingRoutes = require("../src/routes/training.route");

app.use(
  cors({
    // origin: "http://127.0.0.1/",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use("/user", userRoutes);
app.use("/training", trainingRoutes);

app.get("/", (req, res) => {
  res.send("にほんごをわかりません!");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

module.exports = app;
