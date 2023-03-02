const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 7, 2030'),
    target: 'Kepler 442-b',
    customer: ['ISRO', 'NASA'],
    upcoming: true,
    success: true
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launchData){
    latestFlightNumber++;
    launches.set(latestFlightNumber, {...launchData, 
        flightNumber: latestFlightNumber,
        customer: ['ISRO', 'NASA'],
        upcoming: true,
        success: true,
    });
}

launches.set(launch.flightNumber, launch);
module.exports = {
    getAllLaunches,
    addNewLaunch,
}