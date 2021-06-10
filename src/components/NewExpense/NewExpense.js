import { React } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSubmitFormData = (submitedFormData) => {
    const formData = {
      ...submitedFormData,
      id: Math.random().toString(),
    };
    props.onSubmitFormData(formData);
  };

  return (
    <div className='new-expense'>
      <NewExpenseForm onSubmit={onSubmitFormData} />
    </div>
  );
};

export default NewExpense;
