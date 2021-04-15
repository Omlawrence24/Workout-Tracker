const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongo");
const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes');


const app = express();

app.use(logger("dev"));

app.use('/workouts', workoutsRoutes);

module.exports = ("Workouts", workoutsRoutes);
