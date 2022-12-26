import React,{useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
function NewExpense(props)
{
    const NewExpenseClickHandler= (data) =>
    {
        const newData=
        {
            id:Math.random().toString(),
            ...data
        };
        props.onExpenseClick(newData);
    }
    
    const [isStart,setStart]=useState(false);
    const startHandler = () =>
    {
        setStart(true);
    }
    const cancelHandler = () =>
    {
        setStart(false);
    }
    return (
        <div>
        <div className="new-expense">
            {!isStart && <button onClick={startHandler}>Add Expense</button>}
            {isStart && <ExpenseForm onCancel={cancelHandler} onNewExpenseClick={NewExpenseClickHandler}></ExpenseForm>}
        </div>
        </div>
    );
}
export default NewExpense;