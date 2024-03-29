const express = require("express");
const routes = require('./routes');
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongo");
const path = require("path");
const PORT = process.env.PORT || 3000;

// const db = require("./models");
const { Workouts, Routine } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
