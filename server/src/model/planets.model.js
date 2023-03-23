const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

let isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.1 &&
    planet["koi_prad"] < 1.6
  );
};

function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          savePlanet(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", async () => {
        const countPlanetOnDB = (await getAllPlanets()).length;
        console.log(`${countPlanetOnDB} habitable planets found!`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  //get all planets from mongodb
  return await planets.find({});
}

//checks if the planet exists, if does it inserts the data
async function savePlanet(planet) {
  try {
    //updating planets collection
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        keplerName: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.log(`something went wrong ${err}`);
  }
}

module.exports = {
  loadPlanets,
  getAllPlanets,
};
