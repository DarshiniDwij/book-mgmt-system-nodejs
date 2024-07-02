const db = require("../models");
const Genre = db.genre;
const Op = db.Op;


//create and save new Genre

exports.create = (req, res) => {

    //Validate request
    if (!req.body.genre_name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    //create a new Genre
    const genre = {
        genre_name : req.body.genre_name,
    };

    //save Genre in database
    Genre.create(genre)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Genre."
        });
      });
};


// Retrieve all Genre from the database.
exports.findAll = (req, res) => {
    const genre_name = req.query.genre_name;
    var condition = genre_name ? { genre_name: { [Op.like]: `%${genre_name}%` } } : null;
  
    Genre.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving Genre."
        });
      });
  };


  // Find a single Genre with an id
exports.findOne = (req, res) => {
    const genre_id = req.params.genre_id;
  
    Genre.findByPk(genre_id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Genre with id = ${genre_id}`
        });
      });
  };
