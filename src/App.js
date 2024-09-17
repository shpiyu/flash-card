import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './style.css';
import './App.css';

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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={
            <Row className="justify-content-center mt-6 vh-100">
              <Col xs={12} md={8}>
                <h1 className="text-center mt-4">PMP® Concepts Flashcard</h1>
                <FlashcardList category={category} />
              </Col>
            </Row>
          } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
