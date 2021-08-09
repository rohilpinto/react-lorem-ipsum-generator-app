import React from "react";

const Content = ({ filterData, setFilterData }) => {
  return (
    <div className="content-container">
      {filterData.map((arr, indx) => {
        return <p key={indx}>{arr}</p>;
      })}
    </div>
  );
};

export default Content;
