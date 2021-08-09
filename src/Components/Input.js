import React from "react";

import EnterIcon from "../assets/enter-icon.svg";

const Input = ({ number, setNumber, filterData, setFilterData, data, prevData, setPrevData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let toNumber = parseInt(number);

    console.log(toNumber);
    console.log(number);
    if (toNumber <= 0) {
      toNumber = 1;
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
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="input-container inputs">
          <div className="user-input-container">
            <label htmlFor="number">Number of paragraphs </label>
            <input type="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
        </div>

        <div className="user-submit inputs">
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
