const express = require("express");
const app = express();

const PlanetsRouter = require("./router/planets/planets.router");

//parses incoming json data
app.use(express.json());
app.use(PlanetsRouter);

module.exports = app;