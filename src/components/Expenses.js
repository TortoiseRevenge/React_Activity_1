import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./newExpense/ExpensesFilter.js";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(filteredYear) {
    setFilteredYear(filteredYear);
  }
  const filteredExpenses = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      ></ExpensesFilter>
        <ExpenseList items={filteredExpenses}></ExpenseList>
    </Card>
  );
}
export default Expenses;
