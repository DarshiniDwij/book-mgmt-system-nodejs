import React, { useState, useEffect } from "react";
import TopBooksCarousel from "./TopBooksCarousel";

const DivOverlay = () => {
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
        console.log(data);
        setBestsellingBooks(data); // Assuming API returns an array of books
      } catch (error) {
        console.error("Error fetching bestselling books:", error);
      }
    };

    fetchBestsellingBooks();
  }, []);
  return (
    <div>
      <section>
        <div style={{ marginTop: "70px" }}>
          <h4>BINK. Publisher</h4>
        </div>
        <div style={{ marginTop: "10px", marginBottom: "100px" }}>
          <h1>BESTSELLERS</h1>
        </div>
        <div>
          <TopBooksCarousel
            bestsellingBooks={bestsellingBooks}
          ></TopBooksCarousel>
        </div>
      </section>
      <section style={{ backgroundColor: "#0E345A" }}>
        <div className="divider" style={{ paddingTop: "300px" }}>
          <hr />
        </div>
        <div>
          <h5 style={{ color: "white" }}>This Month's</h5>{" "}
        </div>
        <div style={{ fontSize: "40px", lineHeight: 1, color: "white" }}>
          RECOMMENDED BOOKS
        </div>
        <br />
        <div className="divider">
          <hr />
        </div>
        <div></div>
        <div className="divider">
          <hr />
        </div>

        <div>
          <span style={{ fontSize: "80px", lineHeight: 1, color: "white" }}>
            There's No
          </span>
          <br />
          <span
            style={{
              fontSize: "80px",
              lineHeight: 1,
              color: "white",
              font: "georgia",
            }}
          >
            {" "}
            Such Thing As Too
          </span>
          <br />
          <span style={{ fontSize: "80px", lineHeight: 1, color: "white" }}>
            {" "}
            Many Books
          </span>
          <br />
          <button
            className="custom-button"
            style={{ marginTop: "40px", marginBottom: "30px" }}
          >
            View Books
          </button>
          <div>
            <div className="divider" style={{ marginBottom: "30px" }}>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DivOverlay;
