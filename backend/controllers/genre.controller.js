const db = require("../models");
const Genre = db.genre;
const Op = db.Op;

console.log("enter genre controller1")
//create and save new Genre

const create = async(req, res) => {

  console.log("enter genre controller2")
    //Validate request
    if (!req.body.genre_name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    //create a new Genre
    const genre = {
        genre_name : req.body.genre_name
    };

    //save Genre in database
    await Genre.create(genre)
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
const findAll = async(req, res) => {
    const genre_name = req.query.genre_name;
    var condition = genre_name ? { genre_name: { [Op.like]: `%${genre_name}%` } } : null;
  
    await Genre.findAll({ where: condition })
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
const findOne = async(req, res) => {
    const genre_id = req.params.genre_id;
  
    await Genre.findByPk(genre_id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Genre with id = ${genre_id}`
        });
      });
  };

  module.exports = {
    create,findAll,findOne
};
