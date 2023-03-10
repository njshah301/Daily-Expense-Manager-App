import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React,{useState} from "react";


function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);

  const clickHander= ()=>
  {
    setTitle('Updated!');
    console.log(title);
  };
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
         Rs: {props.amount}
      </div>
      <button onClick={clickHander}>Change the title</button>
        </Card>
        </li>
  );
}

export default ExpenseItem;
