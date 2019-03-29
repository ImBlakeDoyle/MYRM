const express = require("express");
const router = express.Router();
const MainController = require("./../controllers/main_controller");

router.get("/", MainController.homePage);

module.exports = router;