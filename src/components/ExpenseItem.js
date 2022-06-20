import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';
function ExpenseItem(props){
    const [title,setTitle] = useState(props.title);
 function clickHandler(){
    setTitle("update");
 }
return(
<div>
<Card className='expense-item'>
    <ExpenseDate date = {props.date}></ExpenseDate>
<div className='expense-item__description'>
    <h2>{title}</h2>
</div>
<div className='expense-item__price'>
    ${props.amount}
</div>
<button onClick={clickHandler}>Change Title</button>
</Card>
</div>
);
}

export default ExpenseItem;