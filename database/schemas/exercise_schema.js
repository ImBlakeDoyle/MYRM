const { Schema } = require("mongoose");
const MusclegroupSchema = require("./muscle_group_schema");

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    muscle_group: MusclegroupSchema
});

module.exports = ExerciseSchema;