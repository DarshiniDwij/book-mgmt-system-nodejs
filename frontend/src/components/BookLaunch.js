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
        <div>
            <div>

            <div><h5 style={{color:'#0E345A', marginTop:'40px'}}>Coming Up</h5> </div>
                <div style={{fontSize:'60px',lineHeight:1,color:'#0E345A'}}>BOOK LAUNCH</div><br/>
               
                
            </div>

                 <div className="book-container">
                        {book ? (
                            <div className="book-details">
                                 <div className="book-info">
                                    <h2>{book.title}</h2>
                                    <p>Author : {book.author_id}</p>
                                    <p>When : {book.genre}</p>
                                    <p>{book.publication_date}</p>
                                    <p>{process.env.PUBLIC_URL+"/images/"+book.imagePath} </p>
                                </div>
                                <img src={process.env.PUBLIC_URL+"/images/"+book.imagePath} alt={book.title} className="book-image" />
                               
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
            
        </div>
        
    );

};

export default BookLaunch;