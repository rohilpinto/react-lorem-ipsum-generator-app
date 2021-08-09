import React from "react";

import EnterIcon from "../assets/enter-icon.svg";

const Input = ({ number, setNumber, filterData, setFilterData, data, prevData, setPrevData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let toNumber = parseInt(number);

    console.log(toNumber);
    console.log(number);
    if (toNumber <= 0) {
      toNumber = 0;
    }

    if (number >= 8) {
      toNumber = 8;
    }
    setFilterData(data.slice(0, toNumber));
    // console.log(newdata);
  };
  // console.log(newdata);
  return (
    <div className="user-input">
      <form action="" className="form">
        <div className="input-container inputs">
          <div className="user-input-container" onChange={(e) => setNumber(e.target.value)}>
            <label htmlFor="number">Number of paragraphs </label>
            <input type="number" id="number" value={number} />
          </div>
        </div>

        <div className="user-submit inputs" onClick={handleSubmit}>
          <label htmlFor="">
            <button type="submit" value="submit">
              <img src={EnterIcon} alt="enter-icon" name="enter-icon" />
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Input;
