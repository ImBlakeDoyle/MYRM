const mongoose = require("mongoose");
const RepsSchema = require("./../schemas/reps_schema");

const RepsModel = mongoose.model("Reps", RepsSchema);

module.exports = RepsModel;