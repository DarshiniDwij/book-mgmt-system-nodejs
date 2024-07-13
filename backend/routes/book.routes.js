const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller.js");

// Create a new Book
router.post("/createBook", bookController.createBook);

// Retrieve all Books
router.get("/", bookController.findAllBooks);

// Retrieve all published Books
router.get("/published", bookController.findAllPublished);

// Retrieve a single Book with id
router.get("/:book_id", bookController.findBook);

// Update a Book with id
router.put("/:book_id", bookController.update);

// Delete a Book with id
router.delete("/:book_id", bookController.deleteBook);

// Delete all Books
router.delete("/", bookController.deleteAll);

// get top 10 best selling books
router.get("/bestsellingBooks", bookController.getTop10BestSellingBooks);
module.exports = router;
