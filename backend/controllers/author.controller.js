const db = require("../models");
const Author = db.author;
const Op = db.Op;

//create and save new author

exports.create = (req, res) => {

    //Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    //create a new author
    const author = {
        name : req.body.name,
        biography : req.body.biography
    };

    //save author in database
    Author.create(author)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Book."
        });
      });
};

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Author.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving Authors."
        });
      });
  };

    // Find a single author with an id
exports.findOne = (req, res) => {
    const author_id = req.params.author_id;
  
    Author.findByPk(author_id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Author with id = ${author_id}`
        });
      });
  };

  // Update a Author by the id in the request
exports.update = (req, res) => {
    const author_id = req.params.author_id;
  
    Author.update(req.body, {
      where: { author_id: author_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Author was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Author with id=${author_id}. Maybe author was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Author with id=" + author_id
        });
      });
  };


  // Delete a Author with the specified id in the request
exports.delete = (req, res) => {
    const author_id = req.params.author_id;
  
    Author.destroy({
      where: { author_id: author_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Author was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Author with id=${author_id}. Maybe Author was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Author with id=" + author_id
        });
      });
  };