import './ExpenseFilter.css'

const ExpensesFilter = (props) => {

    const onSelect = (evnt) =>{
        const Filter = props.Filter
        if(evnt.target.value !== 'Any'){
          Filter(evnt.target.value)
        }
        else{
          props.setAny(evnt.target.value)
        }
    }
  
    return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onSelect}>
          <option value='Any'>Any</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter