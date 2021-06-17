import Expenses from "./components/expenses/Expenses.js"
import NewExpense from "./components/NewExpense/NewExpense.js"
import React, {useState} from "react"
import ShowAddExpense from "./components/NewExpense/ShowAddExpenseForm"
import DeleteExpense from "./components/NewExpense/DeleteExpense.js"

const STARTER_EXPENSES = [
  {
    key: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: '2020-01-07',
  },
  { key: 'e2', title: 'New TV', amount: 799.49, date: '2020-04-02' },
  {
    key: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: '2021-09-12',
  },
  {
    key: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: '2021-12-9',
  },
]

function App() {

  const [expenses, setExpense] = useState(STARTER_EXPENSES)
  const [formVisible, makeVisible] = useState(false)
  const [delFormVis, showDelete] = useState(false)

  const deleteButtonHandle = () =>{
      showDelete(true)
  }

  const getCancelInput = () => {
    makeVisible(false)
  }

  const saveExpense = (expense) =>{
      if(expense.title.length > 0 && expense.amount.length > 0 && expense.date.length > 0){
        setExpense([...expenses, expense])
        CloseExpenseForm()
      }
  }

  const onDeleteExpense = (name) => {
      setExpense(exp => {
        const updatedExp = [...exp.filter(ex => ex.title !== name)]
        return updatedExp
      })
      console.log(expenses)
  }

  const ShowExpenseForm = () =>{
    makeVisible(true)
  }
  const CloseExpenseForm = () =>{
    makeVisible(false)
  }
  const cancelDel = () => {
    showDelete(false)
  }

  const renderItem = () =>{
    if(formVisible === false && delFormVis === false){
      return <ShowAddExpense showForm={ShowExpenseForm} deleteBtnProp={deleteButtonHandle}/>
    }
    else if(formVisible === true){
      return <NewExpense addExpenseToList={saveExpense} cancel={getCancelInput}/>
    }
    else if(delFormVis === true){
      return <DeleteExpense cancel={cancelDel} delete={onDeleteExpense}/>
    }
  }
  return (
    <div>
      {renderItem()}
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
