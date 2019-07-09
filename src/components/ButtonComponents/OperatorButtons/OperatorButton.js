import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button
        className="operatorButton"
        // onClick={() => {props.setOperators}}
        >{props.operator.char}
      </button>
    </>
  );
};

export default OperatorButton;