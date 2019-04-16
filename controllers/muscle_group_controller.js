const MusclegroupModel = require("../database/models/muscle_group_model");

async function create(req, res) {
    const { name } = req.body;

    let theMuscleGroup = await MusclegroupModel.findOne({ name });

    if (theMuscleGroup === null) {
        let theMuscleGroup = await MusclegroupModel.create({ name });
        console.log(`Created muscle group of ${name}`);
        res.json("created muscle group");
    }
}

module.exports = {
    create
}