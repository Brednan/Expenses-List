import './ShowAddExpenseForm.css'

const ShowAddExpenseForm = (props) => {

    const onButtonClick = () =>{
        props.showForm()
    }

    const onDeleteExpense = () => {
        props.deleteBtnProp()
    }

    return (
        <div className="cont">
            <button className="btn" onClick={onButtonClick}>Add New Expense</button>
            <button className="btn" onClick={onDeleteExpense}>Delete Expense</button>
        </div>)
}

export default ShowAddExpenseForm