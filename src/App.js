import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import './style.css';
import './App.css';

// Import the Login component
import Login from './components/Login'; // Ensure this path is correct based on where your Login.js is located

function App() {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Router>
      <Container className="mt-5">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className='header-name' href="#">Flashcard</Navbar.Brand>
          <Nav className="ml-auto navv">
            <Form inline>
              <FormControl as="select" value={category} onChange={handleCategoryChange} className="mr-sm-2">
                <option value="">Select Category</option>
                <option value="Initiation">Initiation</option>
                <option value="Planning">Planning</option>
                <option value="Execution">Execution</option>
                <option value="Monitoring and controlling">Monitoring and controlling</option>
                <option value="Closing">Closing</option>
                <option value="Agile principles and mindset">Agile principles and mindset</option>
                <option value="Agile Methodology">Agile Methodology</option>
                <option value="Agile Ceremonies">Agile Ceremonies</option>
                <option value="Servant leadership">Servant leadership</option>
                <option value="Agile Tools & Techniques">Agile Tools & Techniques</option>
              </FormControl>
            </Form>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/login" element={<Login />} /> {/* Add route for the Login component */}
          <Route path="/" element={
            <Row className="justify-content-center mt-6 vh-100">
              <Col md={8}>
                <h1 className="text-center mt-4">PMP® Concepts Flashcard</h1>
                <FlashcardList category={category} />
              </Col>
            </Row>
          } /> {/* Default route to FlashcardList */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
