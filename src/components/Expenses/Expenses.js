import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import "./Expenses.css";
import Filter from "../Filter/Filter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onChangeYearFilter = (yearFromSelector) => {
    setSelectedYear(yearFromSelector);
  };

  return (
    <Card className='expenses'>
      <Filter onChangeYearFilter={onChangeYearFilter} />
      {props.expensesData
        .filter((item) => {
          return item.date.getFullYear().toString() === selectedYear;
        })
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
