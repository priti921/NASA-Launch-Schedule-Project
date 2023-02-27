const express = require('express');
const PlanetsRouter = express.Router();
const { httpGetAllPlanets } = require('../planets/planets.controller');


PlanetsRouter.get('/planets', httpGetAllPlanets);

module.exports = PlanetsRouter;