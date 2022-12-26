import React from "react";
import './TotalDisplay.css';

function TotalDisplay(props)
{
    let totalExpense=0;

    for (const price of props.expenses)
    {   
        totalExpense+=parseInt(price.amount);
    }
return(
    <div className="total"> 
    <p>Total Expense: ₹ {totalExpense}</p>
    </div>);
}

export default TotalDisplay;