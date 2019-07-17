import React from "react";

const Display = props => {
  return <div className="display">
    
    {props.totalResult === "" ?
      `${props.firstNumber} ${props.operator} ${props.secondNumber}` :
      `${props.firstNumber} ${props.operator} ${props.secondNumber} Result: ${props.totalResult}`
    }

  </div>;
};

export default Display;