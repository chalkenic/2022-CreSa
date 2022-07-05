// Module for building REST APIs
const express = require("express");

// Express middleware module for enabling Cross Origin Resource Sharing (CORS)
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3001",
};

// const bodyParser = require("body-parser");
const mysql = require("mysql");

// var connection = require("./library/db");
// var indexRouter = require("./routes/index");
// var citiesRouter = require("./routes/customers");

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CreditSafe!" });
});

module.exports = app;
