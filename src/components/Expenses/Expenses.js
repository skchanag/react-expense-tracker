import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          date={e.date}
          title={e.title}
          amount={e.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
