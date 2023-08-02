import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import './Faqpage.css'
const Question = ({ question, solution }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div>
      <div className="question1" onClick={() => setShowSolution(!showSolution)}>
        <h3>{question}</h3>
        <p>
          {showSolution ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </p>
      </div>
      {showSolution && <p className="question1 solution">{solution}</p>}
    </div>
  );
};

export default Question;
