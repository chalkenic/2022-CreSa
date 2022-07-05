// Module for building REST APIs
const express = require("express");

// Express middleware module for enabling Cross Origin Resource Sharing (CORS)
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3001",
};

const db = require("./app/models");
db.sequelize.sync();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CreditSafe!" });
});

require("./app/routes/cities.routes")(app);

module.exports = app;
