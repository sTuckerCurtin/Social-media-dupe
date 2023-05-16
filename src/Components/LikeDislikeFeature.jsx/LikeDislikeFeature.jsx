import React, { useState } from 'react';
import "./LikeDislikeFeature.css";

const ColorChangeButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(activeButton === button ? null : button);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted!', activeButton);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='buttonposition'>
        <button
          className={`color-button ${activeButton === 'green' ? 'green' : ''}`}
          onClick={() => handleButtonClick('green')}
        >
          Like
        </button>
        <button
          className={`color-button ${activeButton === 'red' ? 'red' : ''}`}
          onClick={() => handleButtonClick('red')}
        >
          Dislike
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ColorChangeButtons;








