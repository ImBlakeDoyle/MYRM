const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(cors({
    origin: process.env.FRONT_END_DOMAIN
}));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes"));

module.exports = app;