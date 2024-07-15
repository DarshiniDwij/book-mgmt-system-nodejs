const express = require('express')
const router = express.Router();

const authorController = require("../controllers/author.controller.js")

// Create a new Author
router.post("/createAuthor", authorController.create);

// Retrieve all Author
router.get("/authors", authorController.findAll);


// Retrieve a single Author with id
router.get("/author/:author_id", authorController.findOne);

// Update a author with id
router.put("/author/:author_id", authorController.update);

// Delete a author with id
router.delete("/author/:author_id", authorController.deleteAuthor);

module.exports = router;
