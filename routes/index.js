const express = require("express");
const router = express.Router();
const MainController = require("../controllers/main_controller");
const RepController = require("../controllers/rep_controller");
const MusclegroupController = require("../controllers/muscle_group_controller");
const ExerciseController = require("../controllers/exercise_controller");


router.get("/", MainController.homePage);

router.post("/reps", RepController.create);

router.post("/exercise", ExerciseController.create);

router.post("/muscle_group", MusclegroupController.create);



module.exports = router;