import React, {useState} from 'react'

import './ExpenseItem.css'
// import ExpenseDate from './ExpenseDate.js'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () =>{
        setTitle('Updated!')
    }

    return (
        <div className="expense-item">
                <div>{props.date}</div>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount.toString()}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
        </div>
        )
 }

 export default ExpenseItem