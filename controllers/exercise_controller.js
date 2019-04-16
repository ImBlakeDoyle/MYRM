const ExerciseModel = require("../database/models/exercise_model");
const MusclegroupModel = require("../database/models/muscle_group_model");

async function create(req, res) {
    console.log(req.body);
    const { name, muscleGroup } = req.body;

    const muscle_group = await MusclegroupModel.findOne({name: muscleGroup});


    let theExercise = await ExerciseModel.create({ name, muscle_group });
    console.log(`Created exercise of ${name}`);
    res.json("created exercise");

    // let exercise = new ExerciseModel({
    //     name,
    //     theMuscleGroup
    // });

    // const result = await exercise.save();
    // console.log(result);
}

module.exports = {
    create
}