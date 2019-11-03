const express = require("express");
const example = express();
const listeners = require("./listeners/index");

listeners.run();
example.use("/logger", require("./routes"));

module.exports = example;
