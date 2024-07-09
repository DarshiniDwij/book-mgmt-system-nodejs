import { React, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

const BookModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleoffCanvas = () => {
    handleClose();
    props.onHandleCallBack(props.book);
    // props.onHide();
  };
  console.log("author");
  console.log(props.author_name);

  console.log("genre");
  console.log(props.genre);

  console.log("inside modal");
  console.log(props);

  return (
    <div>
      {props && props.book && (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton style={{ borderButtom: "none" }}>
            {/* <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title> */}
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <img
                    src="/images/test.png"
                    alt="testimage"
                    style={{ marginBottom: "30px" }}
                  />
                </Col>
                <Col xs={6} md={6}>
                  <span>
                    <h3>{props.book.title}</h3>
                  </span>
                  <br />
                  <span>Author : {props.author}</span>
                  <br />
                  <span>Genre :{props.genre}</span>
                  <br />
                  <span>published Date:{props.book.publication_date}</span>
                  <br />
                  <span>Description:{props.book.description}</span>
                  <div className="button1-container">
                    <button
                      className="modal-button"
                      onClick={() => handleoffCanvas()}
                    >
                      UPDATE
                    </button>

                    <button className="modal-button">DELETE</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          {/* <ItemOffCanvas
            handleCallBack={props.handleCallBack}
            show={show}
            handleClose={handleClose}
            bookData={currentItem}
          /> */}
        </Modal>
      )}
    </div>
  );
};

export default BookModal;
