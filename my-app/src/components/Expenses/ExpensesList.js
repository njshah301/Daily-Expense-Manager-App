import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
function ExpensesList(props)
{

    return (<ul className="expenses-list">
            ({props.expense.length===0?<p className='dummy'>No data added !!</p> :props.expense
    .map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))})
    </ul>)
}

export default ExpensesList;