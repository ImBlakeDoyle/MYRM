const mongoose = require("mongoose");
const ExerciseSchema = require("./../schemas/exercise_schema");

const ExerciseModel = mongoose.model("Exercise", ExerciseSchema);

module.exports = ExerciseModel;