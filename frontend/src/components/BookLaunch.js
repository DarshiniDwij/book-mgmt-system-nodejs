import React, { useState, useEffect } from 'react';
import './BookLaunch.css';

const BookLaunch = () =>{

    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBookDetails(); // Fetch book publish details when component mounts
    }, []);

    const fetchBookDetails = async () => {
        try {
            console.log("fetch started");
            const response = await fetch('http://localhost:3000/api/books/2'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBook(data); // Set book state with fetched data
            console.log("fetch complete");
            console.log(data);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    };

    return (
        <div className="book-container">
            {book ? (
                <div className="book-details">
                    <img src={book.image} alt={book.title} className="book-image" />
                    <div className="book-info">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>{book.genre}</p>
                        <p>{book.published}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

};

export default BookLaunch;