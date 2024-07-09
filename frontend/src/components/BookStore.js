import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./ProductCard";
import { Button } from "react-bootstrap";
import ItemOffCanvas from "./ItemOffCanvas";
import ToastComponent from "./ToastComponent";
const BookStore = () => {
  // const { id } = useParams();
  const [books, setBooks] = useState(null);
  const [showAuthorList, setAuthorShowList] = useState(false);
  const [showGenreList, setGenreList] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showToast, setShowtoast] = useState(false);

  const [show, setShow] = useState(false);

  // const [toastMessage, setToastMessage] = useState("");
  // const [toastVariant, setToastVariant] = useState("success");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleShowToast = (message, variant) => {
  //   setToastMessage(message);
  //   setToastVariant(variant);
  //   setShowToast(true);
  // };

  // const handleCallBack = (newBook) => {
  //   console.log(newBook);
  //   setBooks([...books, newBook]);
  // };

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
    } else {
      console.log("updation started2");
      setBooks([...books, updatedBook]);
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

  if (!books) {
    return <div>Loading the page...</div>; // Add loading state if data is being fetched
  }

  const handleoffCanvas = (event) => {
    handleShow();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <h5>Filter By</h5>
              <div className="filter-divider" style={{ marginBottom: "5px" }}>
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
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
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
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
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

              <ItemOffCanvas
                handleCallBack={handleCallBack}
                show={show}
                handleClose={handleClose}
              ></ItemOffCanvas>

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
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BookStore;
