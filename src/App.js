import { React, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Bars from "./components/Bars/Bars";

const DATA_ARRAY = [
  {
    id: "0001",
    title: "New Balance sneakers",
    price: "99",
    date: new Date(2021, 3, 8),
  },
  {
    id: "0002",
    title: "Levis Jacket",
    price: "79",
    date: new Date(2021, 2, 23),
  },
  {
    id: "0004",
    title: "Eastpak Backpack",
    price: "65",
    date: new Date(2021, 1, 12),
  },
  {
    id: "0005",
    title: "Adidas Tracksuit",
    price: "139",
    date: new Date(2021, 4, 1),
  },
];

function App() {
  const [data, setData] = useState(DATA_ARRAY);

  const onSubmitFormData = (formData) => {
    setData((prevState) => {
      return [formData, ...prevState];
    });
  };

  return (
    <div className='App'>
      <NewExpense onSubmitFormData={onSubmitFormData} />
      <Expenses expensesData={data} />
    </div>
  );
}

export default App;
