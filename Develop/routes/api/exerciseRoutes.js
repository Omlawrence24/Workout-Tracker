
const router = require('express').Router();
const { Workouts } = require('../../models');


// create a workout "CONTINUE WORKOUT"
router.put("/id", ({ body }, res) => {
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
router.post("/api/exercise", ({ body }, res) => {
    Workouts.create(body)

        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
});

// get all exercises 
router.get("/api/exercise", (req, res) => {
    Workouts.find({})
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;