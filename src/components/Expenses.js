import React,{useState} from 'react';
import './Expenses.css'
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState("2022");
    function filterChangeHandler(selectedYear){
       setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expenses =>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
}
export default Expenses;