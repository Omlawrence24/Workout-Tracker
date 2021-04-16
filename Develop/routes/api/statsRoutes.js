const router = require('express').Router();
const { Workouts, Routine } = require('../../models');

router.post("/stats", (req, res) => {
    Workouts.create({ type: "Jogging" })
        .then(dbExcercise => {
            console.log(dbExcercise);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});



// displays the work out dashboard "MY DASHBOARD"
router.get("/stats", (req, res) => {
    Routine.findAll({})
        .then(dbRoutine => {
            res.json(dbRoutine);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;