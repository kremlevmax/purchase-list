import React, { useState } from "react";
import Card from "../Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Filter from "../Filter/Filter";
import BarsCalculator from "./BarsCalculator";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const onChangeYearFilter = (yearFromSelector) => {
    setSelectedYear(yearFromSelector);
  };

  const listToDisplay = props.expensesData.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <BarsCalculator listToDisplay={listToDisplay} />
      <Filter onChangeYearFilter={onChangeYearFilter} />
      <ExpensesList listToDisplay={listToDisplay} />
    </Card>
  );
};

export default Expenses;
