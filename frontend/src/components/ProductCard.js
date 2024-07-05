import React , { useState }from 'react';
import {Card,Button} from 'react-bootstrap';

function ProductCard() {

  const [showFooter, setShowFooter] = useState(false);

  const handleMouseEnter = () => {
    setShowFooter(true);
  };

  const handleMouseLeave = () => {
    setShowFooter(false);
  };

  return (
    <div>

<Card style={{ width: '18rem' }}  onMouseEnter={handleMouseEnter}
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
         <Button className="w-100 custom-borderless-btn" style={{backgroundColor:"#0E345A",border:'none'}}>
         View Details
        </Button>
        </Card.Footer>
      )}
    </Card>

    </div>
   
  );
};

export default ProductCard;