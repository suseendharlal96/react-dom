import React, { useState } from "react";
import classes from "./Autocomplete.module.css";

// data could be fetched using API
const bankUpi = ["okicici", "okhdfc", "okaxis", "okhsbc", "paytm", "pnb", "iob", "okbob"];
let timeoutId = null;
const Autocomplete = () => {
  const [upiId, setUpiId] = useState("");
  const [suggested, setSuggested] = useState("");
  const [predictionList, setPredictionList] = useState([]);

  const upiIdChangeHandler = ({ target: { value = "" } }) => {
    setUpiId(value);
    const [username, bank] = value.split("@");
    if (!username) {
      setSuggested("");
      setPredictionList([]);
      return;
    }
    // debounce
    if (bank) {
      clearTimeout(timeoutId);
      timeoutId = null;
      let suggestedBanks = [];
      timeoutId = setTimeout(() => {
        suggestedBanks = bankUpi.filter((upi) => upi.startsWith(bank)); //can be api
        if (suggestedBanks.length > 0) {
          setPredictionList(suggestedBanks);
          setSuggested(`${username}@${suggestedBanks[0]}`);
        } else {
          setSuggested(`${value}`);
          setPredictionList([]);
        }
      }, 2000);
      if (suggestedBanks.length > 0) {
        setSuggested(`${username}@${suggestedBanks[0]}`);
      } else {
        setSuggested(`${value}`);
      }
    }
  };

  const checkRightArrow = (e) => {
    if (e.keyCode === 9) e.preventDefault(); // Tab button
    const { keyCode } = e;
    if ([9, 39].includes(keyCode)) {
      setUpiId(suggested);
      setPredictionList([]);
    }
  };

  const selectionHandler = (upi) => {
    setUpiId(upiId.split("@")[0] + "@" + upi);
    setSuggested(upiId.split("@")[0] + "@" + upi);
    setPredictionList([]);
  };

  return (
    <form className={classes.formContainer}>
      <input type="text" autoComplete="off" spellCheck="off" value={suggested} onChange={() => {}} />
      <input type="text" autoComplete="off" pattern=".+@.+" spellCheck="off" value={upiId} onKeyDown={checkRightArrow} placeholder="username@upi" onChange={upiIdChangeHandler} />
      {predictionList.length > 0 && (
        <ul className={classes.predictionListContainer}>
          {predictionList.map((list) => (
            <li key={list} className={classes.predictionList} onClick={() => selectionHandler(list)}>
              {list}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Autocomplete;
