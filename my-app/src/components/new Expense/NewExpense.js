import React from "react";
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
    
    return (
        <div className="new-expense">
            <ExpenseForm onNewExpenseClick={NewExpenseClickHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;