import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function BookModal(props) {

    

    
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{borderButtom:'none'}}>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <img src="/images/test.png" alt="test image" style={{marginBottom:'30px'}}/>
            </Col>
            <Col xs={6} md={6}>
              <span>Book Title</span><br/>
              <span>Author : </span><br/>
              <span>Genre :</span><br/>
              <span>published Date:</span>
              <div className="button1-container">

              <button className="modal-button" >UPDATE</button>
              <button className="modal-button">DELETE</button>

              </div>
              
            </Col>
          </Row>

        </Container>
      </Modal.Body>
      
    </Modal>
  );
};

export default BookModal;

