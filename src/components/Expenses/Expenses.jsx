import React, {useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = items.filter(eachItem => {
        return eachItem.date.getFullYear().toString() === filteredYear;
    } )


    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter 
        defaultYear={filteredYear} 
        onChangeFilter={filterChangeHandler} />
        {/* {filteredExpenses.length === 0 && <p style={{color: "white"}}>No Expenses found.</p>}
        {filteredExpenses.length > 0 && (filteredExpenses.map(item => 
        (
            <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            />
        )))
    } */}
        {/* {expensesContent} */}
        <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items1={filteredExpenses}/>
        </Card>
        </div>
    )
}

export default Expenses
