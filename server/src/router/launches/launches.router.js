const express = require('express')
const launchesRouter = express.Router();

const { httpGetAllLaunches } = require('./launches.controller');


launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;

