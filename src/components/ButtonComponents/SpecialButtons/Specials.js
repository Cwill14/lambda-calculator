import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsList, setSpecials] = useState(specials);
  console.log("specials: ", specials);

  return (
    <div>
       {specialsList.map(eachSpecial => {
         return <SpecialButton special={eachSpecial} setSpecials={setSpecials} />
       })}
    </div>
  );
};

export default Specials;