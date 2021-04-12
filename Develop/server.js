const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongo");
const path = require("path");
const PORT = process.env.PORT || 3000;

// const db = require("./models");
const { Exercise, Cardio } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

Exercise.create({ type: "Jogging" })
  .then(dbExcercise => {
    console.log(dbExcercise);
  })
  .catch(({ message }) => {
    console.log(message);
  });


app.get("/",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get("/stats",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/stats.html"))
})
app.get("/exercise",(req, res) => { 
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
})

app.get("/api/stats", (req, res) => {
  Exercise.find({})
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/cardio", (req, res) => {
  Cardio.find({})
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
   
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});


app.post("/api/exercise", ({ body }, res) => {
    Exercise.create(body)
      .then(({ _id }) => Exercise.findOneAndUpdate({}, { $push: { Exercise: _id } }, { new: true }))
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
  


// app.get("/populateduser", (req, res) => {
//   // TODO
//   // =====
//   // Write the query to grab the documents from the User collection,
//   UserSchema.methods.populate = async function () {
//    let name = this.name
//    let notes = this.notes
//    .populate("Note");
//    return `Name${name}Title${notes.title}Body${notes.body}`
//   }
//   // and populate them with any associated Notes.
//   // TIP: Check the models out to see how the Notes refers to the User
// });

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
