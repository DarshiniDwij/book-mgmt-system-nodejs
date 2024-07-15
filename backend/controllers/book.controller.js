const db = require("../models");
const Book = db.books;
const Op = db.Op;

// Create and Save a new Book
const createBook = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Book
  const book = {
    title: req.body.title,
    author_id: req.body.author_id,
    genre_id: req.body.genre_id,
    published: req.body.published ? req.body.published : false,
    publication_date: req.body.publication_date,
    language: req.body.language,
    price: req.body.price,
    description: req.body.description,
    imagePath: req.body.imagePath,
    booksPresent: req.body.booksPresent,
    booksSold: req.body.booksSold,
  };

  // Save Book in database
  await Book.create(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    });
};

// Retrieve all Books from the database.
const findAllBooks = async (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  await Book.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books.",
      });
    });
};

// Find a single Book with an id
const findBook = async (req, res) => {
  const book_id = req.params.book_id;

  await Book.findByPk(book_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Book with id = ${book_id}`,
      });
    });
};

// Update a Book by the id in the request
const update = async (req, res) => {
  const book_id = req.params.book_id;

  await Book.update(req.body, {
    where: { book_id: book_id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Book was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Book with id=${book_id}. Maybe Book was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Book with id=" + book_id,
      });
    });
};

// Delete a Book with the specified id in the request
const deleteBook = async (req, res) => {
  const book_id = req.params.book_id;

  await Book.destroy({
    where: { book_id: book_id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Book was deleted successfully!" + book_id,
        });
      } else {
        res.send({
          message: `Cannot delete Book with id=${book_id}. Maybe Book was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Book with id=" + book_id,
      });
    });
};

// Delete all Books from the database.
const deleteAll = async (req, res) => {
  await Book.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Books were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all books.",
      });
    });
};

// Find all published Books
const findAllPublished = async (req, res) => {
  await Book.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
    });
};

const getTop10BestSellingBooks = async (req, res) => {
  await Book.findAll({
    order: [["booksSold", "DESC"]],
    limit: 10,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error("Error fetching top selling books:", error);
      throw error;
    });
};

const fetchBooksThisMonth = async (req, res) => {
  const startDate = new Date();
  startDate.setDate(1); // Set to the first day of the current month
  startDate.setHours(0, 0, 0, 0); // Start of the day

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1); // Move to the next month
  endDate.setDate(0); // Set to the last day of the current month
  endDate.setHours(23, 59, 59, 999); // End of the day
  await Book.findAll({
    where: {
      publication_date: {
        [Op.between]: [startDate, endDate],
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error("Error fetching top selling books:", error);
      throw error;
    });
};

const fetchUpComingPublicationBook = async (req, res) => {
  const currentDate = new Date();
  await Book.findOne({
    where: {
      publication_date: {
        [Op.gt]: currentDate,
      },
    },
    order: [["publication_date", "ASC"]],
    limit: 1, // Order by publication_date ascending
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error("Error fetching upcoming publication books:", error);
      throw error;
    });
};

module.exports = {
  findAllPublished,
  deleteAll,
  deleteBook,
  update,
  findBook,
  findAllBooks,
  createBook,
  getTop10BestSellingBooks,
  fetchBooksThisMonth,
  fetchUpComingPublicationBook,
};
