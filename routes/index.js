const express = require("express");
const router = express.Router();
const MainController = require("../controllers/main_controller");
const RepController = require("../controllers/rep_controller");

router.get("/", MainController.homePage);

router.post("/", RepController.create);

module.exports = router;