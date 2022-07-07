// Source configuration.
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Apply new Sequelize mapper instance based on config provided.
const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  host: dbConfig.HOST,
});

// Apply library and instance into database object.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Append model into database.
db.cities = require("./city.model.js")(sequelize, Sequelize);
module.exports = db;
