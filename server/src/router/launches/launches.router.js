const express = require('express')
const launchesRouter = express.Router();

const { getAllLaunches } = require('./launches.controller');


launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;

