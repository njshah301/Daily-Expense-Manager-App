import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/new Expense/NewExpense";


import React,{useState} from "react";
const dummy_expense = [
  {
    id: "01",
    title: "dummy1",
    date: new Date(2021, 8, 22),
    amount: "2000",
  },
  {
    id: "02",
    title: "dummy2",
    date: new Date(2022, 9, 22),
    amount: "2000",
  },
  {
    id: "03",
    title: "dummy33",
    date: new Date(2001, 9, 22),
    amount: "2000",
  },
  {
    id: "04",
    title: "dummy4",
    date: new Date(2001, 9, 22),
    amount: "2000",
  },
];
function App() {

  const [expense,setExpense]=useState(dummy_expense);

  const runExpenseHandler= (data) =>
  {
    
    setExpense((prevExpense) =>{
     return [data,...prevExpense];
    });

  };
  return (
       
          <div className="App">
          <NewExpense onExpenseClick={runExpenseHandler}></NewExpense>
          {console.log(expense)}
          <Expense expenses={expense}/>
          </div>
  );
}

export default App;
