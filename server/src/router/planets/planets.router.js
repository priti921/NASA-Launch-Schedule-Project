const express = require('express');
const PlanetsRouter = express.Router();
const { getAllPlanets } = require('../planets/planets.controller');


PlanetsRouter.get('/planets', getAllPlanets);

module.exports = PlanetsRouter;