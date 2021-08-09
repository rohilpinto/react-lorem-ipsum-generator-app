import React, { useState } from "react";
import "./App.scss";

// Component Imports
import Input from "./Components/Input";
import data from "./data.js";
import Content from "./Components/Content";

const App = () => {
  const [number, setNumber] = useState(0);
  const [filterData, setFilterData] = useState([]);

  // console.log(filterData);
  // console.log(filterData);
  return (
    <div className="App">
      <div className="title-wrapper">
        <h1>Generate Lorem Ipsum</h1>
      </div>
      <Input number={number} setNumber={setNumber} filterData={filterData} setFilterData={setFilterData} data={data}></Input>

      <Content filterData={filterData} setFilterData={setFilterData}></Content>
      <br />
    </div>
  );
};

export default App;
