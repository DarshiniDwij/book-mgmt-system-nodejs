import React , { useState }from 'react';
import {Card,Button} from 'react-bootstrap';
import BookModal from './BookModal';

function ProductCard() {

  const [showFooter, setShowFooter] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleMouseEnter = () => {
    setShowFooter(true);
  };

  const handleMouseLeave = () => {
    setShowFooter(false);
  };

  return (
    <div>

<Card style={{width:'12rem',border:'none',borderRadius:'0 !important'}} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Card.Img variant="top" src="/images/test.png"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Card Price
        </Card.Text>
      </Card.Body>
    
      {showFooter && (
        <Card.Footer className="text-center"  style={{backgroundColor:"#0E345A"}}>
         <Button className="w-100 custom-borderless-btn" style={{backgroundColor:"#0E345A",border:'none'}} onClick={() => setModalShow(true)}>
         View Details
        </Button>
        </Card.Footer>
      )}
    </Card>
    <BookModal show={modalShow} onHide={() => setModalShow(false)} />
    
    </div>
   
  );
};

export default ProductCard;