import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')

    const CancelClick = () => {
        props.getCanel()
    }

    const titleChangeHandler = (evnt) =>{
        setEnteredTitle(evnt.target.value)
    }

    const dateChangeHandler = (evnt) =>{
        setEnteredDate(evnt.target.value)
    }

    const amountChangeHandler = (evnt) =>{
        setEnteredAmount(evnt.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            key: Math.random.toString(),
            title: enteredTitle,
            date: enteredDate,
            amount: enteredAmount
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={CancelClick}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm