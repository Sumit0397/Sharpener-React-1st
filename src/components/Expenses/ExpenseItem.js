import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props) {
    const deleteExpenseHandler = () => {
        const expenseItemElement = document.querySelector('.expense-item');
        expenseItemElement.remove();
    }

    return (
        
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <ExpenseDetails amount={props.amount} title={props.title} location={props.location}/>
                <button onClick={deleteExpenseHandler}>Delete Expense</button>
            </Card>

    )
}

export default ExpenseItem;
