const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchById,
  abortLaunchById,
} = require("../../model/launches.model");

async function httpGetAllLaunches(req, res) {
  return res.status(200).json(await getAllLaunches());
}

async function httpPostNewLaunches(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate
  ) {
    return res.status(400).json({
      error: "invalid data provided, code: 400",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(404).json({
      error: "invalid data provided, code: 404",
    });
  }

  await scheduleNewLaunch(launch);
  console.log(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  //  check if id exists

  if (!existsLaunchById(launchId)) {
    return res.status(404).json({
      error: "not found",
    });
  } else {
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);
  }

  //  if does not exist, return 404
}

module.exports = {
  httpGetAllLaunches,
  httpPostNewLaunches,
  httpAbortLaunch,
};
