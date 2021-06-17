import './NewExpense.css'
import './ShowAddExpenseForm.css'
import React, {useState} from 'react'

const DeleteExpense = (props) => {

    const [inputVal, setVal] = useState('')

    const onValUpdate = (event) => {
        setVal(event.target.value.toString())
    }

    const deleteHandle = () =>{
        props.delete(inputVal)
    }

    const onCancel = () =>{
        props.cancel()
    }

    return(
        <div className="new-expense">
            <form>
                <input type="text" style={{fontSize: "25px"}} onChange={onValUpdate}/>
            </form>
            <button onClick={deleteHandle} style={{position: 'relative', top: '10px'}}>Delete</button>
            <button onClick={onCancel} style={{position: 'relative', top: '10px'}}>Cancel</button>
        </div>)
}

export default DeleteExpense