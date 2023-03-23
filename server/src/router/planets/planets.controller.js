const { getAllPlanets } = require("../../model/planets.model.js");
// all i needed to do is destructure the planets import
async function httpGetAllPlanets(req, res) {
  res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
