const mongoose = require("mongoose");
const mongo = require("mongo");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

