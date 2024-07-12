import React, { useState, useEffect } from "react";
import ImageOverlay from "./ImageOverlay";
import DivOverlay from "./DivOverlay";
import BookLaunch from "./BookLaunch";

const Home = () => {
  const [bestsellingBooks, setBestsellingBooks] = useState([]);
  useEffect(() => {
    // Fetch top 10 bestselling books from API or mock data
    const fetchBestsellingBooks = async () => {
      try {
        // Replace with your API endpoint or mock data
        const response = await fetch(
          `http://localhost:3000/api/books/bestsellingBooks`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bestselling books");
        }
        const data = await response.json();
        setBestsellingBooks(data.slice(0, 10)); // Assuming API returns an array of books
      } catch (error) {
        console.error("Error fetching bestselling books:", error);
      }
    };

    fetchBestsellingBooks();
  }, []);
  return (
    <div>
      <main>
        <ImageOverlay></ImageOverlay>
        <DivOverlay></DivOverlay>
        <section id="bookLaunch">
          <BookLaunch></BookLaunch>
        </section>
      </main>
    </div>
  );
};

export default Home;
