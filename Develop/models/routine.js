const mongoose = require("mongoose");
const mongo = require("mongo");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    //we need a way to tie a workout to a date (date field?)

    //we need to alter our workouts schema a tiny bit to allow 
    //for multiple sets of type, name, duration, etc
    //example: jogging and then doing squats
    
    
    
    type: {
        type: String
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