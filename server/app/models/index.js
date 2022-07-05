const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  host: dbConfig.HOST,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.cities = require("./city.model.js")(sequelize, Sequelize);
module.exports = db;
