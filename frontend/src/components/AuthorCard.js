import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
const AuthorCard = ({ author }) => {
  const [showFooter, setShowFooter] = useState(false);
  const imageUrl = `/images/Authors/${author.name}.png`;
  const handleMouseEnter = () => {
    setShowFooter(true);
  };

  const handleMouseLeave = () => {
    setShowFooter(false);
  };
  return (
    <div>
      {author && (
        <Card
          style={{
            width: "12rem",
            border: "none",
            borderRadius: "0 !important",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{author.name}</Card.Title>
          </Card.Body>

          {showFooter && (
            <Card.Footer
              className="text-center"
              style={{ backgroundColor: "#0E345A" }}
            >
              <Button
                className="w-100 custom-borderless-btn"
                style={{ backgroundColor: "#0E345A", border: "none" }}
              >
                View Details
              </Button>
            </Card.Footer>
          )}
        </Card>
      )}
    </div>
  );
};

export default AuthorCard;
