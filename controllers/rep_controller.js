const RepModel = require("../database/models/reps_model");
const ExerciseModel = require("../database/models/exercise_model");
const MusclegroupModel = require("../database/models/muscle_group_model");


async function create(req, res) {
    const { weight, amount, date, exercise } = req.body;

    

    const theExercise = await ExerciseModel.findOne({exercise});

    const repEntry = await RepModel.create({ weight, amount, date, theExercise });

    if (theExercise === null){
        console.log("there is none");
    }

    const muscleGroup = theExercise.muscleGroup;
}

module.exports = {
    create
}