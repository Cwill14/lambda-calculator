import React from "react";

const NumberButton = props => {
  return (
    <>
      <button 
        className="button numberButton"
        onClick={() => {props.addInput(props.number)}}
        >{props.number}
      </button>
    </>
  );
};

export default NumberButton;
