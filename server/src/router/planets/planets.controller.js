const { getAllPlanets } = require("../../model/planets.model.js");
// all i needed to do is destructure the planets import
function httpGetAllPlanets(req, res) {
  res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
