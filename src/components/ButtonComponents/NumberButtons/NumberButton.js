import React from "react";

const NumberButton = props => {
  return (
    <>
      <button 
        className="numberButton"
        // onClick={() => (props.setNumbers)}
        >{props.number}
      </button>
    </>
  );
};

export default NumberButton;
