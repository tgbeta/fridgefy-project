import React, { useState } from 'react';

const Accordion = ({ title, ingredients, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{ingredients}{image}</div>}
    </div>
  );
};

export default Accordion;