import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AuthorCard = ({ author }) => {
  const [showFooter, setShowFooter] = useState(false);
  const imageUrl = `/images/Authors/${author.name}.png`;
  const handleMouseEnter = () => {
    setShowFooter(true);
  };

  const handleMouseLeave = () => {
    setShowFooter(false);
  };

  // const handleAuthor = () => {
  //   window.location.href = `/singleAuthor/${author}`;
  // };
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
              <Link to={`/singleAuthor/${author.id}`} state={author}>
                <Button
                  className="w-100 custom-borderless-btn"
                  style={{ backgroundColor: "#0E345A", border: "none" }}
                >
                  View Details
                </Button>
              </Link>
            </Card.Footer>
          )}
        </Card>
      )}
    </div>
  );
};

export default AuthorCard;
