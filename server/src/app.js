const express = require("express");
const app = express();
const cors = require('cors');

const PlanetsRouter = require("./router/planets/planets.router");


app.use(cors({
    options: 'http://localhost:3000'
}))
//parses incoming json data
app.use(express.json());
app.use(PlanetsRouter);

module.exports = app;