import React, {useState} from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter defaultYear={filteredYear} onChangeFilter={filterChangeHandler} />
            {items.map(item => (
                <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                />
            ))}
          
        </Card>
        </div>
    )
}

export default Expenses
