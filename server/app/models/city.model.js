module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define("city", {
    name: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.INTEGER,
    },
    longitude: {
      type: Sequelize.INTEGER,
    },
    rating: {
      type: Sequelize.STRING,
    },
    established: {
      type: Sequelize.STRING,
    },
    population: {
      type: Sequelize.INTEGER,
    },
    alpha2Code: {
      type: Sequelize.STRING,
    },
    alpha3Code: {
      type: Sequelize.STRING,
    },
    currencyCode: {
      type: Sequelize.STRING,
    },
    weather: {
      type: Sequelize.STRING,
    },
  });
  return City;
};
