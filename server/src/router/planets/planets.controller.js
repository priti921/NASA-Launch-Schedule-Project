const planets = require('../../model/planets.model.js');

function getAllPlanets (req, res){
    res.json(planets);
}

module.exports = {
    getAllPlanets
}