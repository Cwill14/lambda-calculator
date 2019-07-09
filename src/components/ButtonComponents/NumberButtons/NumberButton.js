import React from "react";

const NumberButton = props => {
  return (
    <>
      <button 
        className="numberButton"
        // onClick={() => (props.setNumbers)}
        onClick={() => {props.setFirstNumber(props.number)}}
        >{props.number}
      </button>
    </>
  );
};

export default NumberButton;
