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
router.get("/bestsellingBooks/books", bookController.getTop10BestSellingBooks);

// fetch all the books which has publication date for this month
router.get("/thisMonthBooks/books", bookController.fetchBooksThisMonth);

// fetch  book which has upcoming publication date.
router.get(
  "/upcomingPublication/books",
  bookController.fetchUpComingPublicationBook
);

module.exports = router;
