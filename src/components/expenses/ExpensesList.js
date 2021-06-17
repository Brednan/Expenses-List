import ExpenseItem from './ExpenseItem.js'
import './ExpensesList.css'
import React, {useState} from 'react'

const ExpensesList = (props) =>{

    const year = props.year

    let filteredYear = props.expenses.filter(ex => ex.date.substring(0, 4) === year).map(m => <ExpenseItem key={m.key} title={m.title} amount={m.amount} date={m.date}/>)

    let anyYear = props.expenses.map(a => <ExpenseItem key={a.key} title={a.title} amount={a.amount} date={a.date}/>)

    let finishedArray

    if(anyYear.length === 0){
        anyYear = <p className="expenses-list__fallback">No items found</p>
    }
    if(filteredYear.length === 0){
        filteredYear = <p className="expenses-list__fallback">No items found</p>
    }

    if(year === "Any"){
        finishedArray = anyYear

    }
    else{
        finishedArray = filteredYear
    }

    return(
        <ul className="expenses-list">
            {finishedArray}
        </ul>
        )
}
export default ExpensesList