import React from "react";
// import Spec from "jest-jasmine2/build/jasmine/Spec";

const SpecialButton = props => {
  return (
    <>
      {props.special === "C" ?
        <button 
          className="button specialButton"
          onClick={() => {
            props.setFirstNumber("")
            props.setOperation("")
            props.setSecondNumber("")
            props.setTotalResult("")
          }}
          >{props.special}
        </button> :
        <button className="button specialButton">{props.special}</button>
      }
    </>
  );
};

export default SpecialButton;