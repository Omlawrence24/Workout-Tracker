
const mongoose = require("mongoose");
const path = require("path");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });



app.post("/api/stats", (req, res) => {
    Workouts.create({ type: "Jogging" })
        .then(dbExcercise => {
            console.log(dbExcercise);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});



// displays the work out dashboard "MY DASHBOARD"
app.get("/api/stats", (req, res) => {
    Workouts.findAll({})
        .then(dbExcercise => {
            res.json(dbExcercise);
        })
        .catch(err => {
            res.json(err);
        });
});