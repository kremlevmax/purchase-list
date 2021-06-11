import React from "react";
import BarItem from "./BarItem";
import "./Bars.css";

const Bars = (props) => {
  console.log(props.dataForBars);
  const listOfValues = props.dataForBars.map((item) => item.value);
  const maxValue = Math.max(...listOfValues);

  return (
    <div className='chart'>
      {props.dataForBars.map((item) => (
        <BarItem
          key={item.label}
          label={item.label}
          value={item.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
export default Bars;
