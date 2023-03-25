//it's better to use new Map() instead of {}
const launches = new Map();

const launchesDB = require("./launches.mongo");
const planetsDB = require("./planets.mongo");

//flight id to keep track with
// let latestFlightNumber = 100;

const DEFAULT_FLIGHT_NUMBER = 100;

//demo data
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

//saving first launch data
saveLaunch(launch);

//checks if the launch id exists
function existsLaunchById(id) {
  return launches.has(id);
}

async function getLatestFlightNumber() {
  const latestLaunch = launchesDB.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }

  return latestLaunch.flightNumber;
}

//getting all launches from this model
async function getAllLaunches() {
  //creates an array from launches object values
  // return Array.from(launches.values());
  return await launchesDB.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

//saving launches on mongodb
async function saveLaunch(launch) {
  const planet = await planetsDB.findOne({
    keplerName: launch.target,
  });

  if (!planet) {
    return new Error("invalid target planet");
  }

  await launchesDB.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    {
      upsert: true,
    }
  );
}

//adding new launches with some iterable data added before hand
function addNewLaunch(launchData) {
  //adds new id
  latestFlightNumber++;

  //then sets a new element with key and value to the launches map
  //in the value i create object and spread the data
  launches.set(latestFlightNumber, {
    ...launchData,
    flightNumber: latestFlightNumber, //adding the incremented flight number
    customer: ["ISRO", "NASA"],
    upcoming: true,
    success: true,
  });
}

//aborting launch by changing their success and upcoming to false
function abortLaunchById(id) {
  const abort = launches.get(id); //gets the object associated to the object and upon change the original object gets modified
  abort.success = false;
  abort.upcoming = false;
}

//the launch model gets added to the launches map with a key and a value
// launches.set(launch.flightNumber, launch);

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchById,
  abortLaunchById,
};
