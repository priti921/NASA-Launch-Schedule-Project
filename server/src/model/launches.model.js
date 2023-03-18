//it's better to use new Map() instead of {}
const launches = new Map();

//flight id to keep track with
let latestFlightNumber = 100;

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

//checks if the launch id exists
function existsLaunchById(id) {
  return launches.has(id);
}

//getting all launches from this model
function getAllLaunches() {

  //creates an array from launches object values
  return Array.from(launches.values());
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
launches.set(launch.flightNumber, launch);


module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchById,
  abortLaunchById,
};
