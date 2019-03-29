const mongoose = require("mongoose");
const MuscleGroupSchema = require("./../schemas/muscle_group_schema");

const MuscleGroupModel = mongoose.model("MuscleGroup", MuscleGroupSchema);

module.exports = MuscleGroupModel;