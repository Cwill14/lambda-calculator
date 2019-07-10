import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button
        className="operatorButton"
        onClick={() => {
          props.addOperator(props.operator.value);
        }}
      >
      {props.operator.char}
      </button>
    </>
  );
};

export default OperatorButton;