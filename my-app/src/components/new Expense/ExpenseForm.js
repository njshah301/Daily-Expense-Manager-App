import React, { useState } from "react";
import "./ExpenseForm.css";

import handleSubmit from "../../handles/handleSubmit";
function ExpenseForm(props) {
  const [gettitle, setTitle] = useState("");
  const [getAmount, setAmount] = useState("");
  const [getDate, setDate] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const numberHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const EventHandler = (event) => {
    event.preventDefault();
    const data = {
      title: gettitle,
      date: new Date(getDate),
      amount: +getAmount,
    };
    handleSubmit(data);
    props.onNewExpenseClick(data);
    setAmount("");
    setTitle("");
    setDate("");
  };


const cancelHandler = () =>
{
  props.onCancel();

}
  return (
    <form onSubmit={EventHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title </label>
          <input type="text" onChange={titleHandler} value={gettitle}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={numberHandler}
            value={getAmount}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date </label>
          <input type="date" onChange={dateHandler} value={getDate}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button Type="submit" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
