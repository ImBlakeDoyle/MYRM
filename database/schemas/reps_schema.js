const { Schema } = require("mongoose");
const ExerciseSchema = require("./exercise_schema");

const RepsSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    exercise: [ExerciseSchema]  
});

module.exports = RepsSchema;