import React , {useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enterTitle , setenterTitle] =  useState('');
    const [enterAmount , setenterAmount] = useState('');
    const [enterDate , setenterDate] = useState('');
    // const [enterInput , setenterInput] = useState({
    //     enterTitle : '',
    //     enterAmount : '',
    //     enterDate : ''
    // })

    const changeTitleHandler = (event) => {
        setenterTitle(event.target.value);
        // setenterInput({
        //     ...enterInput,
        //     enterTitle : event.target.value
        // })
        // setenterInput((prevState)  => {
        //     return {...prevState , enterTitle : event.target.value}
        // })
    }
    const changeAmountHandler = (event) => {
        setenterAmount(event.target.value);
        // setenterInput({
        //     ...enterInput,
        //     enterAmount : event.target.value
        // })
    }
    const changeDateHandler = (event) => {
        setenterDate(event.target.value);
        // setenterInput({
        //     ...enterInput,
        //     enterDate : event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseItem = {
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate)
        }

        console.log(expenseItem);
        setenterTitle('');
        setenterAmount('');
        setenterDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={changeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min={0.01} step={0.01} value={enterAmount} onChange={changeAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min={2023-6-20} max={2024-12-31} value={enterDate} onChange={changeDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
