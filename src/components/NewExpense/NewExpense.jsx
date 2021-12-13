import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const [openForm, setOpenForm] = useState(false)

    const saveNewExpense = (expenseData) => {
        const newExpenses = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddData(newExpenses)
        setOpenForm(false);
    }

    const openCloseForm = () => {
        setOpenForm(!openForm)
    }

    // //Max's way
    // const [isEditing, setIsEditing] = useState(false)

    // const maxWayStart = () => {
    //     setIsEditing(true);
    // }

    //  const maxWayStop = () => {
    //     setIsEditing(false);
    // }

    // //at the ExpenseForm, pass prop:
    // <ExpenseForm onCancel={stopEditingHandler}


    return (
        <div className='new-expense'>
            <button onClick={openCloseForm}>Add New Expense</button>
            {openForm && ( <ExpenseForm closeIt={openCloseForm} onAddExpense={saveNewExpense}/> )}
            
        </div>
    )
}

export default NewExpense
