import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const ItemOffCanvas = ({handleCallBack,show,handleClose})=> {
 

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const [isPublished, setIsPublished] = useState(false);

  const [description, setDescription] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);

//   const [language,setLanguage] = useState([]);
  const [selectedLang,setSelectedLang] = useState('');

  const [amount, setAmount] = useState('');

  const [imageName,setImageName] = useState('');

  const [title,setTitle] = useState('');

  const [validated, setValidated] = useState(false);

   // State to manage validation errors
   const [errors, setErrors] = useState({
    title: '',
    selectedAuthor: '',
    selectedGenre: '',
    isPublished:'',
    description:'',
    selectedDate:'',
    selectedLang:'',
    amount:''
  });

  const handleSubmit = async(event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    event.preventDefault();
    if (validateForm()){

      setValidated(true);
    try {
     
        // Create book object
        const newBook = {
          title: title,
          author_id: selectedAuthor,
          genre_id:selectedGenre,
          published:isPublished,
          publication_date:selectedDate,
          language:selectedLang,
          price:parseFloat(amount.replace(/[^\d.-]/g, '')).toFixed(2),
          description:description,
          imagePath:title+".png"
        };
  
        // POST request to API
        const response = await fetch('http://localhost:3000/api/books/createBook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newBook)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Book created: started');
        const data = await response.json();
        console.log('Book created:', data);
      //  handleCallBack(data);
      callCallBack(data);
        
         handleCancel();
        setErrors({
          title: '',
          selectedAuthor: '',
          selectedGenre: '',
          isPublished:'',
          description:'',
          selectedDate:'',
          selectedLang:'',
          amount:''
        });
        setValidated(false);
  
        // Handle success or navigation to next page
        // Example: Redirect to a success page or show a success message
      } catch (error) {
        console.error('Error creating book:', error);
        // Handle error state or show an error message to the user
      }
    }
    else{
      console.log('Form has errors. Cannot submit.');
      event.stopPropagation();
    }
    
  };

  const callCallBack = (data) =>{
    console.log("happy ending")
    console.log(data);
    handleCallBack(data);
  }


  const handleAmountChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setAmount(value);
    setErrors({ ...errors, amount: '' }); 
  };


  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      valid = false;
    }
    if (!selectedAuthor.trim()) {
      newErrors.author = 'Author is required';
      valid = false;
    }
    if (!selectedGenre.trim()) {
      newErrors.genre = 'Genre is required';
      valid = false;
    }
    // if (!isPublished.trim()) {
    //   newErrors.pstatus = 'Publish status is required';
    //   valid = false;
    // }
    // if (!selectedDate.trim()) {
    //   newErrors.date = 'Published date is required';
    //   valid = false;
    // }
    if (!selectedLang.trim()) {
      newErrors.language = 'language is required';
      valid = false;
    }
    if (!amount) {
      newErrors.cost = 'Cost is required';
      valid = false;
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleCancel = (event) =>{

    setTitle('');
    setSelectedAuthor('');
    setSelectedGenre('');
    setIsPublished(false);
    setSelectedDate('');
    setSelectedLang('');
    setAmount('');
    setDescription('');
    setImageName('');


    
    document.getElementById("myForm").reset();

    

    

  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setErrors({ ...errors, selectedDate: '' }); 
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
    setErrors({ ...errors, description: '' }); 
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setErrors({ ...errors, title: '' }); 
  }

  const handleImageChange = (event) => {
    setImageName(event.target.value);
  }

  const handlePublishStatusChange = (event) => {
    setIsPublished(event.target.value === 'true');
    setErrors({ ...errors, isPublished: '' }); 
  };

  

  const fetchAuthors = async () => {
  try {
    const response1 = await fetch('http://localhost:3000/api/author/authors');
    const data1 = await response1.json();
    console.log("response");
    setAuthors(data1); // Assuming API response is JSON with book details
  } catch (error) {
    console.error('Error fetching book details:', error);   
  }
};

useEffect(() => {
    // Fetch Authors details from API
    fetchAuthors();
}, []);

const fetchGenre = async () => {
    try {
      const response2 = await fetch('http://localhost:3000/api/genre/genres');
      const data2 = await response2.json();
      console.log("response");
      setGenres(data2); // Assuming API response is JSON with book details
    } catch (error) {
      console.error('Error fetching book details:', error);   
    }
  };
  
  useEffect(() => {
      // Fetch Authors details from API
      fetchGenre();
  }, []);

const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
    setErrors({ ...errors, author: '' }); 
   
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setErrors({ ...errors, genre: '' }); 
   
  };

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
    setErrors({ ...errors, selectedLang: '' }); 
   
  };

  

  // const formatAmount = (value) => {
  //   // Format the amount with rupee symbol (₹) and commas
  //   const formattedValue = new Intl.NumberFormat('en-IN', {
  //     style: 'currency',
  //     currency: 'INR',
  //   }).format(value);

  //   return formattedValue;
  // };

  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}
      <Offcanvas show={show} onHide={handleClose} placement='end' backdrop='static' style={{ width: '50vw' }}>
        <Offcanvas.Header closeButton style={{backgroundColor:'#0E345A'}}>
          <Offcanvas.Title style={{color:'white'}}>Add New Book / Update Existing Book</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form  id="myForm" noValidate validated={validated} >
          <Row className="mb-3">

            <Form.Group as={Col} controlId="firstName">
            <Form.Label style={{fontWeight: 'bold'}}>Book Title</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter Book Title"
                name="firstName"
                value={title}
                onChange={handleTitleChange}
            />
             <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
            </Form.Group>

        <Form.Group className="mb-3" controlId="gender">
        <Form.Label style={{fontWeight: 'bold'}}>Author</Form.Label>
        <Form.Select name="author" value={selectedAuthor} onChange={handleAuthorChange} required>
            <option value="">Select an author</option>
            {authors.map(author => (
                <option key={author.id} value={author.author_id}>{author.name}</option>
            ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.author}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
        <Form.Label style={{fontWeight: 'bold'}}>Genre</Form.Label>
        <Form.Select name="genre" value={selectedGenre} onChange={handleGenreChange} required>
            <option value="">Select a genre</option>
            {genres.map(genre => (
                <option key={genre.id} value={genre.genre_id}>{genre.genre_name}</option>
            ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.genre}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight: 'bold'}}>Publish Status</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Published"
            name="publishStatus"
            id="published"
            value={true}
            checked={isPublished === true}
            onChange={handlePublishStatusChange}
            required
          />
          <Form.Check
            type="radio"
            label="Not Published"
            name="publishStatus"
            id="notPublished"
            value={false}
            checked={isPublished === false}
            onChange={handlePublishStatusChange}
          />
        </div>
        <Form.Control.Feedback type="invalid">
          {errors.pstatus}
        </Form.Control.Feedback>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="gender">
        <Form.Label style={{fontWeight: 'bold'}}>Language</Form.Label>
        <Form.Select name="language" value={selectedLang} onChange={handleLangChange} required>
        <option value="">Select language</option>
          <option value="Kannada">Kannada</option>
          <option value="English">English</option>
          <option value="other">Other</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.language}
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight: 'bold'}}>Cost of the Book</Form.Label>
        <Form.Control
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          className="form-control"
          required
        />
         <Form.Control.Feedback type="invalid">
          {errors.cost}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight: 'bold'}}>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={description}
          onChange={handleDescChange}
          placeholder="Enter book description"
          rows={4}
          required
        />
         <Form.Control.Feedback type="invalid">
          {errors.description}
        </Form.Control.Feedback>
      </Form.Group>

      {/* <Form.Group as={Col} controlId="firstName">
            <Form.Label style={{fontWeight: 'bold'}}>Book Image</Form.Label>
            <Form.Control
                type="text"
                placeholder="Book image"
                name="image"
                value={imageName}
                onChange={handleImageChange}
                required
            />
            </Form.Group> */}

            <Form.Group className="mb-3">
        <Form.Label style={{fontWeight: 'bold'}}>Publication Date</Form.Label>
        <br />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          isClearable
          placeholderText="Select a date"
          className="form-control"
          required
        />
         <Form.Control.Feedback type="invalid">
          {errors.date}
        </Form.Control.Feedback>
      </Form.Group>


          </Row>
         
        {/* <Button className="w-100 custom-borderless-btn" style={{backgroundColor:"#0E345A",border:'none',width:'200px'}} type="submit">
         SUBMIT
        </Button> */}

        <button className="modal-button" type="submit" onClick={handleSubmit}>SUBMIT</button>
              <button className="modal-button" onClick={handleCancel}>CANCEL</button>

        {/* <Button className="w-100 custom-borderless-btn" style={{backgroundColor:"#0E345A",border:'none',width:'200px'}} onClick={() =>onClickEventHandler() }>
         CANCEL
        </Button> */}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ItemOffCanvas;

