import React, { useState } from "react";
import FlashcardList from "./FlashcardList"; // Importing the FlashcardList component
import { Container, Row, Col } from "react-bootstrap"; // Importing Bootstrap components
import "./style.css"; // Custom CSS for styling
import "./App.css"; // Additional CSS for the App
import CategoriesLayout from "./Categories";
import { IoArrowBackOutline } from "react-icons/io5";

function App() {
  const flashcardName = "PMP® Concepts";
  const [category, setCategory] = useState("");

  const handleCategoryChange = (catgeory) => {
    setCategory(catgeory);
  };

  const handleBack = () => {
    setCategory("");
  };

  return (
    <div>
      <div className="bg-base-100">
        <div className="navbar bg-base-100 container">
          <p>
            <b className="mr-2">edzest </b> flashcards
          </p>
        </div>
      </div>
      <Container className="not-prose container">
        <Row className="justify-content-center mt-6 vh-100">
          <Col xs={12} md={8}>
            {/* Heading for the flashcard section */}
            <div className="flex items-center">
              {category && (
                <IoArrowBackOutline
                  className="text-4xl cursor-pointer mr-4"
                  onClick={handleBack}
                />
              )}
              <p className="text-center text-3xl font-bold my-4">
                {category === "" ? flashcardName : category}
              </p>
            </div>

            {!category && (
              <CategoriesLayout onCategoryChange={handleCategoryChange} />
            )}

            {category && (
              <div>
                <FlashcardList category={category} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
