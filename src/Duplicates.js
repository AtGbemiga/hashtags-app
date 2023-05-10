import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cleaned } from "./features/inputSlice";

export const Duplicates = () => {
  const [duplicates, setDuplicates] = useState("");
  const inputValue = useSelector(cleaned)
  
  useEffect(() => {
    const secondResults = inputValue
      .split(" ")
      .filter((value, index, arr) => arr.indexOf(value) !== index)
      .join(" ");
    setDuplicates(secondResults);
  }, [inputValue]);

  return duplicates && (
         <div className="duplicate-hashtags-container">
            <h4>Duplicates</h4>
            {duplicates} 
         </div>
    );
};
