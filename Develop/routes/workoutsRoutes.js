// Not sure if all this are required  

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongo");
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });



//   these are the routes that navigate the pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/workout.js" ))
})

app.get("/workout", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/workout.js"))
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

app.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// these routes naviagt the data and how it is recieved or posted 

// create a workout 
app.get("/api/stats", (req, res) => {
    Workouts.create({ type: "Jogging" })
        .then(dbExcercise => {
            console.log(dbExcercise);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

// displays the work out dashboard 
app.get("/api/stats", (req, res) => {
    Workouts.findAll({})
        .then(dbExcercise => {
            res.json(dbExcercise);
        })
        .catch(err => {
            res.json(err);
        });
});

// displays all cardio? or adds all cardio together on one page 

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
app.put("/api/exercise", ({ body }, res) => {
    Workouts.create(body)
        .then(({ _id }) => Workouts.Update({}, { $set: { Workouts: _id } }, { new: true }))
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
});
