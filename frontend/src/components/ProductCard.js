import React , { useState }from 'react';
import {Card,Button} from 'react-bootstrap';
import BookModal from './BookModal';

const ProductCard=(props)=> {

  const [showFooter, setShowFooter] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [author, setAuthor] = useState(null); 
  const [genre,setGenre] = useState(null);

  const handleMouseEnter = () => {
    setShowFooter(true);
  };

  const handleMouseLeave = () => {
    setShowFooter(false);
  };

  console.log("*******")
  console.log(props)
  console.log(modalShow);

  const fetchAuthor = async()=>{
    try {
      const response1 = await fetch(`http://localhost:3000/api/author/author/${props.props.author_id}`);
      const data1 = await response1.json();
      console.log("response");
      console.log(data1)
      setAuthor(data1.name); // Assuming API response is JSON with book details
    } catch (error) {
      console.error('Error fetching book details:', error);   
    }
  };

  const fetchGenre = async()=>{
    try {
      console.log("Jjjjjjjjjjjjjjjjjjjjjjjjj")
      console.log(props.props.genre_id)
      const response2 = await fetch(`http://localhost:3000/api/genre/${props.props.genre_id}`);
      const data2 = await response2.json();
      console.log("response");
      setGenre(data2.genre_name); // Assuming API response is JSON with book details
    } catch (error) {
      console.error('Error fetching book details:', error);   
    }
  };

  const onClickEventHandler = () =>{
    fetchAuthor();
    console.log("author is :")
    console.log(author)
    fetchGenre();
    console.log("genre is :")
    console.log(genre)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%")
    setModalShow(true);

  }

  return (
    <div>

{props && props.props && <Card style={{width:'12rem',border:'none',borderRadius:'0 !important'}} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Card.Img variant="top" src="/images/test.png"/>
      <Card.Body>
        <Card.Title>{props.props.title}</Card.Title>
        <Card.Text>
         {props.props.price}
        </Card.Text>
      </Card.Body>
    
      {showFooter && (
        <Card.Footer className="text-center"  style={{backgroundColor:"#0E345A"}}>
         <Button className="w-100 custom-borderless-btn" style={{backgroundColor:"#0E345A",border:'none'}} onClick={() =>onClickEventHandler() }>
         View Details
        </Button>
        </Card.Footer>
      )}
    </Card>}
    <BookModal 
    show={modalShow} onHide={() => setModalShow(false)} book={props.props} author={author}  genre={genre}/>
    
    </div>
   
  );
};

export default ProductCard;