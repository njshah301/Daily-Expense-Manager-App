import "./Expense.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "../Expense_Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
function Expense(props) {
  const [getYear, setYear] = useState("2020");
  const getYearHandler = (data) => {
    const selectedYear = data;
    setYear(selectedYear);
    console.log("Hello" + selectedYear);
  };
  const filteredExpenses =props.expenses.filter((expense) => expense.date.getFullYear().toString() === getYear);
  
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        ondefaultYear={getYear}
        onGetYear={getYearHandler}
      ></ExpenseFilter>

      {
      
      <ExpensesList expense={filteredExpenses}/>
}
    </Card>
  );

}

export default Expense;
