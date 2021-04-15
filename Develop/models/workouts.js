const mongoose = require("mongoose");
const mongo = require("mongo");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    type: {
        type: String,

    },
    name: {
        type: String,

    },
    duration: {
        type: Number,

    },
    weight: {
        type: Number,

    },
    reps: {
        type: Number,

    },
    sets: {
        type: Number,

    },
    cardio: {
        type: String,
    },

    cardio_duration: {
        type: Number,
    }

});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;

