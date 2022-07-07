// Module for building REST APIs
const express = require("express");

// Express middleware module for enabling Cross Origin Resource Sharing (CORS)
const cors = require("cors");
const app = express();

// Access all database models and sync between node and mysql.
const db = require("./app/models");
db.sequelize.sync();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ensure local client can access CRUD methods on server.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers, *, Access-Control-Allow-Origin",
    "Origin, X-Requested-with, Content_Type,Accept,Authorization",
    "http://localhost:3000"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

// simple route to server port for sanity.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CreditSafe's API!" });
});

// Apply all routes from file into express application.
require("./app/routes/cities.routes")(app);

module.exports = app;
