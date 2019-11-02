const express = require("express");
const parser =  require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(helmet());
app.use(parser.json());
app.use(cors());

app.get("/", (request, response) => {
    response.json({
	message: "Project is working."
    })
});

module.exports = app;
