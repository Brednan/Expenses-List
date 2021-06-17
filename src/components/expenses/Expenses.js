import './ExpenseItem.css'
import './Expenses.css'
import FilterExpenses from './Filtered.js'
import React, {useState} from 'react'
import ExpensesList from './ExpensesList.js'

function Expenses(props){

    const[year, setYear] = useState('Any')

    const onFilter = (val) =>{
        setYear(val)
    }
    const setAnyYear = (val) =>{
        setYear(val)
    }

    return(
        <div className="container">
            <FilterExpenses selected={year} Filter={onFilter} setAny={setAnyYear}/>
            {
                <ExpensesList year={year} expenses={props.expenses}/>
            }
        </div>
    )
}
export default Expenses