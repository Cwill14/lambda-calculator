import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorsList, setOperators] = useState(operators);
  console.log("operators: ", operators);
  return (
    <div>
       {operatorsList.map(eachOperator => {
         return <OperatorButton operator={eachOperator} setOperators={setOperators} addOperator={props.addOperator} />
       })}
    </div>
  );
};

export default Operators;