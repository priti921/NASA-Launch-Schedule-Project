const express = require('express')
const launchesRouter = express.Router();

const { httpGetAllLaunches,httpPostNewLaunches } = require('./launches.controller');


launchesRouter.get('/launches', httpGetAllLaunches);
launchesRouter.post('/launches', httpPostNewLaunches);


module.exports = launchesRouter;

