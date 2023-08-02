import React from "react";
import './productitems.css'
const Buttons = ({ categories, handleCategoryChange }) => {
  return (
    <div className="buttontap">
      {categories.map((category) => (
        <button className="btn p-btn" key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Buttons;