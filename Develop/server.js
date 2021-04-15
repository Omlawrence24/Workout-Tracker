const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongo");
const path = require("path");
const PORT = process.env.PORT || 3000;

// const db = require("./models");
const { Workouts } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

Workouts.create({ type: "Jogging" })
  .then(dbExcercise => {
    console.log(dbExcercise);
  })
  .catch(({ message }) => {
    console.log(message);
  });


//   these are the routes that navigate the pages
app.get("/",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/workout",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/workout.js"))
})

app.get("/stats",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/stats.html"))
})
app.get("/exercise",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
})



// these routes naviagtes the data and how it is recieved or posted 

// displays the work out dashboard 
app.get("/api/stats", (req, res) => {
  Workouts.find({})
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// displays all previous workouts 
app.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.json(err);
    });
});

// creates all added workouts 
app.get("/api/exercise", ({ body }, res) => {
  Workouts.create(body)
   
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// updates one?
app.put("/api/exercise/id", ({ body }, res) => {
    Workouts.create(body)
      .then(({ _id }) => Workouts.Update({}, { $set: { Workouts: _id } }, { new: true }))
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
