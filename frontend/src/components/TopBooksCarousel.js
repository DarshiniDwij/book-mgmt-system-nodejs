import React from "react";
import ProductCard from "./ProductCard";

const TopBooksCarousel = ({ bestsellingBooks }) => {
  return (
    <div className="top-books-carousel">
      {bestsellingBooks.map((book) => (
        <ProductCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default TopBooksCarousel;
