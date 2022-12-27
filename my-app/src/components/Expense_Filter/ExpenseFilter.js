import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

  const selectHandler= (event) =>
  {
    const setValue = event.target.value;
    props.onGetYear(setValue);
  };
  const currYear=new Date().getFullYear();
  const years=[];
  for(let year=1990;year<=currYear;year++)
  {
    years.push(year);
  }

  const yearMap=years.map(year => <option value={year}>{year}</option>)
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.ondefaultYear} className='expense-filter__select' onChange={selectHandler}>
          
          
            {yearMap}
          
          
        </select>
      </div>
    </div>
);

};

export default ExpenseFilter;