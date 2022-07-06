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
    rating: {
      type: Sequelize.STRING,
    },
    established: {
      type: Sequelize.STRING,
    },
    population: {
      type: Sequelize.STRING,
    },
    currency: {
      type: Sequelize.STRING,
    },
  });
  return City;
};
