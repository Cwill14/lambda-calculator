import React from "react";
// import Spec from "jest-jasmine2/build/jasmine/Spec";

const SpecialButton = props => {
  return (
    <>
      <button 
        className="button specialButton"
        // onClick={() => {props.setSpecials()}}
        >{props.special}
      </button>
    </>
  );
};

export default SpecialButton;