import React, { useState } from 'react';
import "./LikeDislikeFeature.css"



const ColorChangeButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div>
      <button
        className={`color-button ${activeButton === 'green' ? 'green' : ''}`}
        onClick={() => handleClick('green')}
      >
        Like
      </button>
      <button
        className={`color-button ${activeButton === 'red' ? 'red' : ''}`}
        onClick={() => handleClick('red')}
      >
        Dislike
      </button>
    </div>
  );
};

export default ColorChangeButtons;


