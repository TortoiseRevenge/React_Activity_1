import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./newExpense/ExpensesFilter.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  function filterChangeHandler(filteredYear) {
    setFilteredYear(filteredYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      ></ExpensesFilter>
      {props.items.map((expensesElement) => (
        <ExpenseItem
          title={expensesElement.title}
          amount={expensesElement.amount}
          date={expensesElement.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}
export default Expenses;
