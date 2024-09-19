import React, { useState } from 'react';
import FlashcardList from './FlashcardList'; // Importing the FlashcardList component
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components for navigation
import './style.css'; // Custom CSS for styling
import './App.css'; // Additional CSS for the App

function App() {
  // State to manage selected category for filtering flashcards
  const [category, setCategory] = useState('');

  // Function to handle the change in category dropdown selection
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Router>
      {/* Bootstrap container for layout */}
      <Container className="mt-5">
        {/* Bootstrap Navbar */}
        <Navbar bg="light" expand="lg">
          {/* Navbar brand or title */}
          <Navbar.Brand className='header-name' href="#">Flashcard</Navbar.Brand>

          {/* Toggler button for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar content, collapses in smaller screens */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Right-aligned navigation (with the category selector) */}
            <Nav className="ml-auto navv">
              {/* Form to select category */}
              <Form inline>
                {/* Dropdown for category selection */}
                <FormControl
                  as="select" // Render a select dropdown
                  value={category} // Bind the selected value to state
                  onChange={handleCategoryChange} // Update state when a new category is selected
                  className="mr-sm-2" // Add right margin for spacing
                >
                  {/* Dropdown options for different categories */}
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

        {/* Main content area with routes */}
        <Routes>
          {/* Define the route for the home page */}
          <Route
            path="/"
            element={
              <Row className="justify-content-center mt-6 vh-100">
                <Col xs={12} md={8}>
                  {/* Heading for the flashcard section */}
                  <h1 className="text-center mt-4">PMP® Concepts Flashcard</h1>
                  {/* FlashcardList component, passing the selected category as a prop */}
                  <FlashcardList category={category} />
                </Col>
              </Row>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
