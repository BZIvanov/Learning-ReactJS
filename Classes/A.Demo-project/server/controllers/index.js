const House = require('../models/house');
const Street = require('../models/street');

module.exports = {
  createStreet: (req, res) => {
    const { location } = req.body;

    Street.create({
      location,
    })
      .then((street) => {
        res.status(201).json({
          message: 'Street created successfully.',
          street,
        });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createHouse: (req, res) => {
    const { location, type, description, price, imageUrl } = req.body;

    House.create({
      type,
      description,
      price,
      imageUrl,
    })
      .then((house) => {
        Street.findOne({
          location,
        }).then((street) => {
          street.homes.push(house._id);
          street.save().then(() => {
            res.status(200).json({
              message: 'House created successfully.',
              house,
            });
          });
        });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  getStreets: (req, res) => {
    Street.find()
      .populate('homes')
      .then((streets) => {
        res.status(200).json({
          message: 'Fetched streets successfully.',
          streets,
        });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
};
