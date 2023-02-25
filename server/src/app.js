const express = require("express");
const app = express();

//parses incoming json data
app.use(express.json());

module.exports = app;