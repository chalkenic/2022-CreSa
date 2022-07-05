module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "cities",
  dialect: "mysql",
  // Define connection count and idle times when accessing database.
  pool: {
    max: 2,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
