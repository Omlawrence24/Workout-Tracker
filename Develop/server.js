const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongo");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const Excercise = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

db.Excercise.create({ type: "Jogging" })
  .then(dbExcercise => {
    console.log(dbExcercise);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/stats", (req, res) => {
  db.Excercise.find({})
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/cardio", (req, res) => {
  db.Cardio.find({})
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/excercise", ({ body }, res) => {
  db.Excercise.create(body)
    .then(({ _id }) => db.Excercise.findOneAndUpdate({}, { $push: { Excercise: _id } }, { new: true }))
    .then(dbExcercise => {
      res.json(dbExcercise);
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
