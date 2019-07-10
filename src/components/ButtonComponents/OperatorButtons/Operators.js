import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = props => {
  const [operatorsList, setOperators] = useState(operators);
  return (
    <div>
       {operatorsList.map(eachOperator => {
         return <OperatorButton 
          className="operator" 
          operator={eachOperator} 
          setOperators={setOperators} 
          addOperator={props.addOperator}
          key={eachOperator.char} 
        />
       })}
    </div>
  );
};

export default Operators;