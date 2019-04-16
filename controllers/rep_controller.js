const RepModel = require("../database/models/reps_model");
const ExerciseModel = require("../database/models/exercise_model");
const MusclegroupModel = require("../database/models/muscle_group_model");


async function create(req, res) {
    const { weight, amount, date, exercise } = req.body;

    const theExercise = await ExerciseModel.findOne({exercise});

    if (theExercise){
        let repEntry = await RepModel.create({ weight, amount, date, theExercise });
        console.log(`Created a rep entry for ${exercise} at weight of ${weight} for ${amount} reps`);
        res.json("created rep entry");
    }

    if (theExercise === null){
        console.log("there is none");
    }

    const muscleGroup = theExercise.muscleGroup;
}

module.exports = {
    create
}