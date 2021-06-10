import React, { useState } from "react";
import Card from "../Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Filter from "../Filter/Filter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const onChangeYearFilter = (yearFromSelector) => {
    setSelectedYear(yearFromSelector);
  };

  return (
    <Card className='expenses'>
      <Filter onChangeYearFilter={onChangeYearFilter} />
      <ExpensesList
        expensesData={props.expensesData}
        selectedYear={selectedYear}
      />
    </Card>
  );
};

export default Expenses;
