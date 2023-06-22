import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseItem) => {
        const expenseItem = {
            ...enteredExpenseItem,
            id : Math.random().toString()
        };
        // console.log(expenseItem);
        props.onAddExpense(expenseItem);
    };

    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>)
}

export default NewExpense;
