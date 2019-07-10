import React from "react";
import Spec from "jest-jasmine2/build/jasmine/Spec";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        className="button specialButton"
        // onClick={() => {props.setSpecials()}}
        >{props.special}
      </button>
    </>
  );
};

export default SpecialButton;