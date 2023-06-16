import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2023 , 6 , 16);
    const expenseItem = "Car Insurance";
    const expenseAmount = 294.76;
    const LoactionOfExpenditure = "Car";

    return (
        
            <div className='expense-item'>
                <div>{expenseDate.toISOString()}</div>
                <div className='expense-item__description'>
                    <h2>{expenseItem}</h2>
                    <div className='expense-item__price'>Rs {expenseAmount}</div>
                    <div>Location of Expenditure = {LoactionOfExpenditure}</div>
                </div>
            </div>

    )
}

export default ExpenseItem;
