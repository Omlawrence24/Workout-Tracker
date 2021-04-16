

const mongoose = require("mongoose");
const path = require("path");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });




// create a workout "CONTINUE WORKOUT"
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

// create a workout "New WORKOUT"
app.post("/api/exercise", ({ body }, res) => {
    Workouts.create(body)

        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
});

// get all exercises 
app.get("/api/exercise", (req, res) => {
    Workouts.find({})
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.json(err);
        });
});
