require('dotenv').config() //need to import dotenv to use env variables
//so it doesn't conflict with the client port
//checks if the port is already in use
const app = require("./app");
const http = require("http");
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

const { loadPlanets } = require("./model/planets.model");

const mongoose = require('mongoose')
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;





//connecting mongodb
const MONGO_URL = `mongodb+srv://${username}:${password}@nasacluster.f4iu3on.mongodb.net/?retryWrites=true&w=majority`

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err)=>{
  console.log(err)
})

async function startServer() {
  await mongoose.connect(MONGO_URL)
  await loadPlanets();

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
