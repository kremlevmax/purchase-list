import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.listToDisplay.length === 0) {
    return <h2 className='expenses-list__fallback '>No Expenses Found</h2>;
  }

  return props.listToDisplay.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      price={item.price}
      date={item.date}
    />
  ));
};
export default ExpensesList;
