import React from 'react'
import ExponseForm from './ExponseForm'
import './NewExpense.css'
const NewExpense=(props)=> {
    const saveExpenceDate=(EnteredExpence)=>{
        const expenseDate={
            ...EnteredExpence,
            id:Math.random().toString()
        }
       props.onAddExpense(expenseDate);
    }
    return (
        <div className="new-expense">
            <ExponseForm PassFrChiledToPar={saveExpenceDate}/>
        </div>
    )
}

export default NewExpense
