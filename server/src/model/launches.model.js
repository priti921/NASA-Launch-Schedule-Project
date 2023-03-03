const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 7, 2030"),
  target: "Kepler 442-b",
  customer: ["ISRO", "NASA"],
  upcoming: true,
  success: true,
};

function existsLaunchById(id) {
  return launches.has(id);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launchData) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, {
    ...launchData,
    flightNumber: latestFlightNumber,
    customer: ["ISRO", "NASA"],
    upcoming: true,
    success: true,
  });
}

function abortLaunchById(id) {
  const abort = launches.get(id);
  abort.success = false;
  abort.upcoming = false;
}

launches.set(launch.flightNumber, launch);
module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchById,
  abortLaunchById,
};
