import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const listToDisplay = props.expensesData.filter((item) => {
    return item.date.getFullYear().toString() === props.selectedYear;
  });

  if (listToDisplay.length === 0) {
    return <h2 className='expenses-list__fallback '>No Expenses Found</h2>;
  }

  return listToDisplay.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      price={item.price}
      date={item.date}
    />
  ));
};
export default ExpensesList;
