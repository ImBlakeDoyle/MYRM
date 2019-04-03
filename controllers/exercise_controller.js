const ExerciseModel = require("../database/models/exercise_model");
const MusclegroupModel = require("../database/models/muscle_group_model");

async function create(req, res) {
    const { name, muscle_group } = req.body;

    const theMuscleGroup = await MusclegroupModel.findOne({ muscle_group });

    let theExercise = await ExerciseModel.findOne({ name });

    if (theExercise === null) {
        let theExercise = await ExerciseModel.create({ name, theMuscleGroup });
    }
}