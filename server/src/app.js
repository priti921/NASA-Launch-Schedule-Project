const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const PlanetsRouter = require("./router/planets/planets.router");
const launchesRouter = require("./router/launches/launches.router");

app.use(
  cors({
    options: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

//parses incoming json data
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(PlanetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
