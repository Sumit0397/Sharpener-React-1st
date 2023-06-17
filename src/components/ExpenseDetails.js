import './ExpenseItem.css'

function ExpenseDetails(props){
    const amount = props.amount;
    const title = props.title;
    const location = props.location;

    return (
        <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>Rs {amount}</div>
                    <div>Location = {location}</div>
        </div>
    )

}

export default ExpenseDetails;