module.exports = app => {

    const genreController = require("../controllers/genre.controller.js")

    const router = require("express").Router();

     // Create a new Genre
     router.post("/", genreController.create);
  
     // Retrieve all Genre
     router.get("/", genreController.findAll);


      // Retrieve a single Genre with id
    router.get("/:genre_id", genreController.findOne);


};
