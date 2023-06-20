import React , {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [amount , setAmount] = useState(props.amount);

    const updateAmountHandler = () => {
        setAmount('$100');
        console.log(amount);
    }
    
    const deleteExpenseHandler = () => {
        const expenseItemElement = document.querySelector('.expense-item');
        expenseItemElement.remove();
    }

    return (
        
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <ExpenseDetails amount={amount} title={props.title} location={props.location}/>
                <button onClick={deleteExpenseHandler}>Delete Expense</button>
                <button onClick={updateAmountHandler}>Update Amount</button>
            </Card>

    )
}

export default ExpenseItem;
