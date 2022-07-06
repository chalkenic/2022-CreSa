const db = require("../models");
const City = db.cities;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "City name must be provided!",
    });
    return;
  }

  const city = {
    name: req.body.name,

    state: req.body.state,

    country: req.body.country,

    rating: req.body.rating,

    established: req.body.established,

    population: req.body.population,

    alpha2Code: req.body.alpha2Code,

    alpha3Code: req.body.alpha3Code,

    currency: req.body.currency,
  };

  City.create(city)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "An error occurred while attempting to create city.",
      });
    });
};
// Retrieve all Cities from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}` } } : null;
  City.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "An error occurred while attempting to search for name.",
      });
    });
};
// Find a single City by an id.
exports.findOne = (req, res) => {
  const id = req.params.id;
  City.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find a city with id ${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: "An error occurred while attempting to retrieve city " + id,
      });
    });
};
// Update a City by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  City.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "City was successfully updated",
        });
      } else {
        res.send({
          message: `Cannot update City at id ${id}. Ensure you provide correct data or confirm city exists within database!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "An error occurred while attempting to update city " + id,
      });
    });
};
// Delete a City with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  City.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "City was successfully deleted",
        });
      } else {
        res.send({
          message: `Cannot delete City ${id}. Ensure you confirm city exists within database!`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: "Unable to delete city " + id,
      });
    });
};
// Delete all City from the database.
exports.deleteAll = (req, res) => {
  City.destroy({
    where: {},
    truncate: false,
  })
    .then((cities) => {
      res.send({ message: `${cities} Cities were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while attempting to delete all cities.",
      });
    });
};
