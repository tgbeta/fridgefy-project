import React, { useState } from 'react';

const Accordion = ({ title, ingredients, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
        <div>
          {ingredients.map((ingredient) => <div>{ingredient}</div>)}
        </div>
        <div>
          <img src={image} width="50" height="60"></img>
        </div>
        
      </div>}
    </div>
  );
};

export default Accordion;