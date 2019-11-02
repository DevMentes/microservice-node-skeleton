const express = require('express');
const example = express();

example.use('/examples', require('./routes'));

module.exports = example;
