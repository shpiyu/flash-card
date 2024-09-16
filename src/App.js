import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import './style.css';
import './App.css';

function App() {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container className="mt-5">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='header-name' href="#">
           Flashcard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <FormControl as="select" value={category} onChange={handleCategoryChange} className="mr-sm-2">
                <option value="">Select Category</option>
                <option value="Initiation">Initiation</option>
                <option value="Planning"> Planning</option>
                <option value="Execution">Execution</option>
                <option value="Monitoring & Controlling">Monitoring & Controlling</option>
                <option value="Closing">Closing</option>
                
                {/* Add more categories as needed */}
              </FormControl>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="justify-content-center mt-6 vh-100">
        <Col md={8}>
          <h1 className="text-center mt-4">PMP® Concept Flashcard</h1>
          <FlashcardList category={category} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;