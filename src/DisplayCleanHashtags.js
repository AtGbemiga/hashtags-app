import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cleaned } from "./features/inputSlice";

export const DisplayCleanHashtags = () => {
  const inputValue = useSelector(cleaned);
  const [duplicateFree, setDuplicateFree] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const firstResult = inputValue.split(" ");
    const fourthResult = firstResult;
    let uniqueChars = [...new Set(fourthResult)].join(" ");
    setDuplicateFree(uniqueChars);
  }, [inputValue]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(duplicateFree);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  
  const buttonLabel = copied ? "Copied!" : "Copy";
  
  return duplicateFree && (
    <div className="clean-hashtags-container">
      <div className="duplicate-free-hashtags">
        <span style={{display: "flex", justifyContent: "space-between"}}>
          <h4>Duplicate free hashtags</h4> 
          <button className="copy-btn" onClick={handleCopyClick} disabled={copied}>{buttonLabel}</button>
        </span>
        <p>{duplicateFree}</p>
      </div>
    </div>
  );
  
};
