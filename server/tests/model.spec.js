const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const CityModel = require("../app/models/city.model.js");

describe("user models", () => {
  const City = CityModel(sequelize, dataTypes);
  const instance = new City();

  checkModelName(City)("city");

  describe("Properties", () => {
    ["name", "country", "state", "rating", "established"].forEach(
      checkPropertyExists(instance)
    );
  });
});
