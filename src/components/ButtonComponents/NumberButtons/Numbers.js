import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = props => {
  const [numbersList, setNumbers] = useState(numbers);

  return (
    <div>
       {numbersList.map(eachNumber => {
         return <NumberButton 
          className="number"
          number={eachNumber} 
          addInput={props.addInput} 
          setFirstNumber={props.setFirstNumber}
          key={eachNumber}
        />
       })}
    </div>
  );
};

export default Numbers;