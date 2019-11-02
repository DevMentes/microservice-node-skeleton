require('dotenv').config();
const express = require("express");
const parser =  require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

const example = require("./src/index");

app.use(helmet());
app.use(parser.json());
app.use(cors());
app.use("", example);

app.get("/", (request, response) => {
    response.json({
	message: "Project is working."
    })
});

module.exports = app;
