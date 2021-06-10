import React, { useState, useEffect } from "react";

import "./Filter.css";

const Filter = (props) => {
  const [year, setYear] = useState("2020");

  const selectYearHadler = (event) => {
    setYear((prevYear) => event.target.value);
  };
  useEffect(() => {
    props.onChangeYearFilter(year);
  });

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectYearHadler} value={year}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
