const { getAllLaunches, addNewLaunch } = require('../../model/launches.model');


function httpGetAllLaunches(req, res){

    return res.status(200).json( getAllLaunches());
}

function httpPostNewLaunches(req, res){
    const launch= req.body;
    if(!launch.mission || !launch.rocket || !launch.target || !launch.launchDate){
        return res.status(400).json({
            error: "bad request"
        })
    }
    launch.launchDate = new Date(launch.launchDate)
    // if(isNaN(launch.launchDate)){
    //     return res.status(404).json({
    //         error: "bad request"
    //     })
    // }


    addNewLaunch(launch);
    console.log(launch)
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpPostNewLaunches
}