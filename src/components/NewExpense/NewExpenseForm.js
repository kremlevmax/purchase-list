import { React, useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const [amount, setAmount] = useState("");
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const [date, setDate] = useState("");
  const dateChengeHandler = (event) => {
    const currentDate = event.target.value;
    setDate(currentDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      price: amount,
      date: new Date(
        new Date(date).getTime() + new Date(date).getTimezoneOffset() * 60000
      ),
    };
    setIsShown((isShown) => (isShown = !isShown));
    setTitle("");
    setAmount("");
    setDate("");

    props.onSubmit(formData);
  };

  const [isShown, setIsShown] = useState(false);

  const buttonSubmitHandller = (event) => {
    event.preventDefault();
    setIsShown((isShown) => (isShown = !isShown));
    setTitle("");
    setAmount("");
    setDate("");
  };

  console.log(isShown);

  if (!isShown) {
    return (
      <button type='submit' onClick={buttonSubmitHandller}>
        Create a New Expense
      </button>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={amount}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            onChange={dateChengeHandler}
            type='date'
            value={date}
            min='2019-01-01'
            max='2022-01-01'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={buttonSubmitHandller}>
          Cancel
        </button>
        <button type='submit'>Send</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
