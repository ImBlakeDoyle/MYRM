const { Schema } = require("mongoose");

const MuscleGroupSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = MuscleGroupSchema;