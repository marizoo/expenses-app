import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {


    const [addTitle, setAddTitle] = useState("");
    const [addAmount, setAddAmount] = useState("");
    const [addDate, setAddDate] = useState("");

    const addTitleHandler = (event) => {
        setAddTitle(event.target.value);
    }
    const addAmountHandler = (event) => {
        setAddAmount(event.target.value);
    }
    const addDateHandler = (event) => {
        setAddDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: addTitle,
            amount: addAmount,
            date: new Date(addDate)
        };

        props.onAddExpense(expenseData);
        setAddTitle("");
        setAddAmount("");
        setAddDate("");

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text" 
                    onChange={addTitleHandler}
                    value={addTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    onChange={addAmountHandler}
                    value={addAmount}
                    min="0.01"
                    step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type="date" 
                    onChange={addDateHandler}
                    value={addDate}
                    min="2021-12-13"
                    min="2022-12-13"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    )
}

export default ExpenseForm
