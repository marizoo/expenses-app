import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveNewExpense = (expenseData) => {
        const newExpenses = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddData(newExpenses)
    }


    return (
        <div className='new-expense'>
            <ExpenseForm onAddExpense={saveNewExpense}/>
        </div>
    )
}

export default NewExpense
