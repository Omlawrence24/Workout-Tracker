const mongoose = require("mongoose");
const path = require("path");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


// displays resistance or workout
// not sure   

app.get("/api/workouts", (req, res) => {
    Workouts.find({})
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.json(err);
        });
});
