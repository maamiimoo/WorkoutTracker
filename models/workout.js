const mongoose = require("mongoose");

const schema = mongoose.schema;

const workoutSchema = new schema ( {
    day: {
        type: Date,
        default: Date.now
    },

    workouts: [
        {
            name: {
                type: String,
                trim: true,
                required: "Exercise Name:"
            },
            type: {
                type: String,
                trim: true,
                required: "Exercise Type:"
            },
            distance: {

            },

            duration: {

            },

            Weight: {

            },

            Sets: {

            },

            Reps:{

            }
        }

    ]
});

const workout = mongoose.model("Workouts", workoutSchema );

module.exports = workout;
