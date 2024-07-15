import React, { useEffect, useState } from "react";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthorCard from "./AuthorCard";
import AuthorOffCanvas from "./AuthorOffCanvas";
import ToastComponent from "./ToastComponent";

const AuthorPage = () => {
  const [authors, setAuthors] = useState(null);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAuthor, setFilteredAuthors] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (authors) {
      applyFilters(searchTerm);
    }
  }, [authors, searchTerm]);

  const applyFilters = (searchTerm) => {
    if (!authors) return;
    let filtered = authors.filter((author) => {
      return (
        searchTerm === "" ||
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredAuthors(filtered);
    //setBooks(filtered);
  };

  const handleShowToast = (message, variant) => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const handleCallBack = (updatedAuthor) => {
    console.log("updation started");
    let index = authors.findIndex(
      (author) => author.author_id === updatedAuthor.id
    );
    if (index !== -1) {
      let updatedAuthors = [
        ...authors.slice(0, index), // all books before the updated book
        updatedAuthor, // updated author
        ...authors.slice(index + 1), // all books after the updated book
      ];
      setAuthors(updatedAuthors);
      handleShowToast("Author updated Succesfully", "success");
    } else {
      console.log("updation started2");
      setAuthors([...authors, updatedAuthor]);
      handleShowToast("Author created Succesfully", "success");
    }
  };

  const onHandleDeleteCallBack = (item) => {
    console.log("deletion started1");
    let index = authors.findIndex(
      (author) => author.author_id === item.author_id
    );
    if (index !== -1) {
      console.log("deletion started2");
      console.log(item.author_id);
      deleteAuthor(item.author_id);
    } else {
      console.log("unable to find the author");
    }
  };

  const deleteAuthor = async (authorId) => {
    try {
      console.log(authorId);
      await fetch("http://localhost:3000/api/author/author/" + authorId, {
        method: "DELETE",
      }).then((response) => {
        if (!response.ok) {
          throw new Error("author not Deleted");
        }
        const updatedAuthors = authors.filter(
          (author) => author.author_id !== authorId
        );
        setAuthors(updatedAuthors);
        handleShowToast("Author deleted Succesfully", "success");
        // return response.json();
      });
    } catch (error) {
      console.error(`Error deleting author with ID ${authorId}:`, error);
    }
  };

  const fetchAuthorsDetails = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/author/authors");
      const data = await response.json();
      console.log("response");
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching authors details:", error);
    }
  };

  useEffect(() => {
    // Fetch authors details from API

    fetchAuthorsDetails();
  }, []);

  if (!authors) {
    return <div>Loading the page....</div>; // Add loading state if data is being fetched
  }

  const handleAuthorOffCanvas = () => {
    handleShow();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <div style={{ marginTop: "5rem", marginBottom: "4rem" }}>
              <h5 style={{ textAlign: "left" }}>Search By</h5>
              <div
                className="filter-divider"
                style={{ marginBottom: "5px", alignItems: "left" }}
              >
                <hr />
              </div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Author name"
                  aria-label="Author"
                  aria-describedby="basic-book"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </div>
            <div
              className="filter-divider"
              style={{
                marginBottom: "5px",
                alignItems: "left",
              }}
            >
              <hr />
            </div>
            <Button
              className="w-100 custom-borderless-btn"
              style={{
                backgroundColor: "#0E345A",
                border: "none",
                width: "200px",
                marginTop: "50px",
              }}
              onClick={() => handleAuthorOffCanvas()}
            >
              Add Author
            </Button>

            {show && (
              <AuthorOffCanvas
                handleCallBack={handleCallBack}
                show={show}
                handleClose={handleClose}
              ></AuthorOffCanvas>
            )}
          </Col>

          <Col md={9}>
            <div>
              <div>
                <span>Our</span>
                <h1>Authors</h1>
              </div>

              <div>
                <div className="book-list">
                  {filteredAuthor.map((author, index) => (
                    <AuthorCard
                      key={index}
                      author={author}
                      onHandleDeleteCallBack={onHandleDeleteCallBack}
                      handleCallBack={handleCallBack}
                    ></AuthorCard>
                  ))}
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

export default AuthorPage;
