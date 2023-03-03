const express = require("express");
const launchesRouter = express.Router();

const {
  httpGetAllLaunches,
  httpPostNewLaunches,
  httpAbortLaunch,
} = require("./launches.controller");

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpPostNewLaunches);
launchesRouter.delete("/launches/:id", httpAbortLaunch);

module.exports = launchesRouter;
