import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'

const NewExpense = (props) =>{
    
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpenseToList(expenseData)
    }

    const getCancelInput = () =>{
        props.cancel()
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} getCanel={getCancelInput}/>
        </div>
    )
}

export default NewExpense