
import React, { useState } from 'react';
import './FlashcardItem.css';  // Assuming you have a CSS file for styling


const FlashcardItem = ({ serialNumber, question, answer, flipped, toggleFlip }) => {
  return (
    <div className="flashcard-container" onClick={toggleFlip}>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
        <div className="front cards">
          <div className="card-title"></div>
          <div className="card-text">{`Q${serialNumber}.${question}`}</div>
        </div>
        <div className="back cards">
          
          <div className="card-title"></div> 
          <div className="card-text">{answer}</div> 
        </div>
      </div>
    </div>
  );
};
export default FlashcardItem;
