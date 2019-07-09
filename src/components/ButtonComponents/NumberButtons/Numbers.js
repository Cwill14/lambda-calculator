import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numbersList, setNumbers] = useState(numbers);
  console.log("numbers: ", numbers);

  return (
    <div>
       {numbersList.map(eachNumber => {
         return <NumberButton number={eachNumber} addInput={props.addInput} setFirstNumber={props.setFirstNumber} />
       })}
    </div>
  );
};

export default Numbers;