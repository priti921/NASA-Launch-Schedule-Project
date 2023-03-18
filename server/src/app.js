const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const PlanetsRouter = require("./router/planets/planets.router");
const launchesRouter = require("./router/launches/launches.router");

//cross origin access
app.use(
  cors({
    options: "http://localhost:3000",
  })
);

//logging 
app.use(morgan("combined"));

//parses incoming json data
app.use(express.json());
//serves static frontend files
app.use(express.static(path.join(__dirname, "..", "public")));


//routes
app.use(PlanetsRouter);
app.use(launchesRouter);

//all routes serves index
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
