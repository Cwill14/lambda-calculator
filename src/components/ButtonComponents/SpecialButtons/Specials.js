import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = props => {
  const [specialsList, setSpecials] = useState(specials);

  return (
    <div>
       {specialsList.map(eachSpecial => {
         return <SpecialButton 
          className="special"
          special={eachSpecial}
          key={eachSpecial}
          setFirstNumber={props.setFirstNumber}
          setOperation={props.setOperation}
          setSecondNumber={props.setSecondNumber}
          setTotalResult={props.setTotalResult}  
        />
       })}
    </div>
  );
};

export default Specials;