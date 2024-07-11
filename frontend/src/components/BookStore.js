import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./ProductCard";
import { Button } from "react-bootstrap";
import ItemOffCanvas from "./ItemOffCanvas";
import ToastComponent from "./ToastComponent";
import GenreOffCanvas from "./GenreOffCanvas";
const BookStore = () => {
  // const { id } = useParams();
  const [books, setBooks] = useState(null);
  const [showAuthorList, setAuthorShowList] = useState(false);
  const [showGenreList, setGenreList] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  const [show, setShow] = useState(false);
  const [genreShow, setGenreShow] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGenreClose = () => setGenreShow(false);
  const handleGenreShow = () => setGenreShow(true);

  const handleShowToast = (message, variant) => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  // const handleCallBack = (newBook) => {
  //   console.log(newBook);
  //   setBooks([...books, newBook]);
  // };

  const onHandleDeleteCallBack = (item) => {
    console.log("deletion started");
    let index = books.findIndex((book) => book.book_id === item.book_id);
    if (index !== -1) {
      console.log("deletion started1");
      deleteBook(item.book_id);
    } else {
      console.log("unable to find the book");
    }
  };

  const deleteBook = async (bookId) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/books/" + bookId,
        {
          method: "DELETE",
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error("Book Deleted");
        }
        const updatedBooks = books.filter((book) => book.book_id !== bookId);
        setBooks(updatedBooks);
        handleShowToast("Book deleted Succesfully", "success");
        // return response.json();
      });
    } catch (error) {
      console.error(`Error deleting book with ID ${bookId}:`, error);
    }
  };

  const handleGenreCallBack = (newGenre) => {
    setGenres([...genres, newGenre]);
    handleShowToast("Genre created Succesfully", "success");
  };

  const handleCallBack = (updatedBook) => {
    console.log("updation started");
    console.log(updatedBook);
    let index = books.findIndex((book) => book.book_id === updatedBook.id);
    if (index !== -1) {
      console.log("updation started1");
      // Update the book using spread operator
      let updatedBooks = [
        ...books.slice(0, index), // all books before the updated book
        updatedBook, // updated book
        ...books.slice(index + 1), // all books after the updated book
      ];

      // Now updatedBooks contains the updated array of books
      setBooks(updatedBooks);
      handleShowToast("book updated Succesfully", "success");
    } else {
      console.log("updation started2");
      setBooks([...books, updatedBook]);
      handleShowToast("book created Succesfully", "success");
    }
  };

  console.log("books are");
  console.log(books);

  const toggleAuthorList = () => {
    setAuthorShowList(!showAuthorList);
  };

  const toggleGenreList = () => {
    setGenreList(!showGenreList);
  };

  const togglePriceList = () => {
    setShowPrice(!showPrice);
  };

  const fetchBookDetails = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/books/");
      const data = await response.json();
      console.log("response");
      setBooks(data); // Assuming API response is JSON with book details
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    // Fetch book details from API

    fetchBookDetails();
  }, [books]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("http://localhost:3000/api/genre/genres");
        const data = await response.json();
        setGenres(data); // Assuming data is an array of author objects
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(
          "http://localhost:3000/api/author/authors"
        );
        const data = await response.json();
        setAuthors(data); // Assuming data is an array of author objects
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  if (!books) {
    return <div>Loading the page...</div>; // Add loading state if data is being fetched
  }

  const handleoffCanvas = (event) => {
    handleShow();
  };

  const handleGenreOffCanvas = (event) => {
    handleGenreShow();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <h5 style={{ textAlign: "left" }}>Filter By</h5>
              <div
                className="filter-divider"
                style={{ marginBottom: "5px", alignItems: "left" }}
              >
                <hr />
              </div>
              <br />

              <button
                className="filter-button"
                onClick={toggleAuthorList}
                style={{ width: "200px" }}
              >
                {showAuthorList ? "Authors     -" : "Authors     +"}
              </button>
              <div style={{ display: showAuthorList ? "block" : "none" }}>
                <ul className="filter-list">
                  {authors.map((author) => (
                    <li key={author.author_id}>{author.name}</li>
                  ))}
                </ul>
              </div>
              <br />

              <div className="filter-divider" style={{ marginBottom: "5px" }}>
                <hr />
              </div>

              <br />

              <button className="filter-button" onClick={toggleGenreList}>
                {showAuthorList ? "Genre     -" : "Genre     +"}
              </button>
              <div style={{ display: showGenreList ? "block" : "none" }}>
                <ul className="filter-list">
                  {genres.map((genre) => (
                    <li key={genres.genre_id}>{genre.genre_name}</li>
                  ))}
                </ul>
              </div>

              <br />

              <div className="filter-divider" style={{ marginBottom: "5px" }}>
                <hr />
              </div>

              <br />

              <button className="filter-button" onClick={togglePriceList}>
                {showAuthorList ? "Price     -" : "Price     +"}
              </button>
              <div style={{ display: showPrice ? "block" : "none" }}>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>

              <br />

              <div className="filter-divider" style={{ marginBottom: "30px" }}>
                <hr />
              </div>

              <Button
                className="w-100 custom-borderless-btn"
                style={{
                  backgroundColor: "#0E345A",
                  border: "none",
                  width: "200px",
                }}
                onClick={handleoffCanvas}
              >
                Add Book
              </Button>

              <Button
                className="w-100 custom-borderless-btn"
                style={{
                  backgroundColor: "#0E345A",
                  border: "none",
                  width: "200px",
                  marginTop: "40px",
                }}
                onClick={handleGenreOffCanvas}
              >
                Add Genre
              </Button>

              <ItemOffCanvas
                handleCallBack={handleCallBack}
                show={show}
                handleClose={handleClose}
              ></ItemOffCanvas>

              <GenreOffCanvas
                handleGenreCallBack={handleGenreCallBack}
                genreShow={genreShow}
                handleGenreClose={handleGenreClose}
              ></GenreOffCanvas>

              <br />
            </div>
          </Col>
          <Col md={9}>
            <div>
              <div>
                <span>Our</span>
                <h1>Book Store</h1>
              </div>
              <div>
                <div className="book-list">
                  {books.map(
                    (book, index) =>
                      book && (
                        <ProductCard
                          key={index}
                          book={book}
                          handleCallBack={handleCallBack}
                          onHandleDeleteCallBack={onHandleDeleteCallBack}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastComponent
        showToast={showToast}
        setShowToast={setShowToast}
        message={toastMessage}
        variant={toastVariant}
      />
    </div>
  );
};
export default BookStore;
