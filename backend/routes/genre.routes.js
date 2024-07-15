const express = require('express')
const router = express.Router();

const genreController = require("../controllers/genre.controller.js")

console.log("enter genre *****")
// Create a new Genre
router.post("/createGenre", genreController.create);

// Retrieve all Genre
router.get("/genres", genreController.findAll);


// Retrieve a single Genre with id
router.get("/:genre_id", genreController.findOne);


module.exports = router;
