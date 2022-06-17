import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';
function ExpenseItem(props){

return(
<div>
<Card className='expense-item'>
    <ExpenseDate date = {props.date}></ExpenseDate>
<div className='expense-item__description'>
    <h2>{props.title}</h2>
</div>
<div className='expense-item__price'>
    ${props.amount}
</div>
</Card>
</div>
);
}

export default ExpenseItem;