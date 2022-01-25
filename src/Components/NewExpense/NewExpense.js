import React, { useState } from 'react'
import ExponseForm from './ExponseForm'
import './NewExpense.css'
const NewExpense=(props)=> {
    const [addExp,setAddExpense]= useState(false);
   const VisbilityHandler =()=>{
   // console.log(x);
    
        setAddExpense(false)
    
   }
    const saveExpenceDate=(EnteredExpence)=>{
        const expenseDate={
            ...EnteredExpence,
            id:Math.random().toString()
        }
       props.onAddExpense(expenseDate);
    }
    const AddExpeHandler=()=>{
        setAddExpense(true);
    }
  
    return (
        <div className="new-expense">
            {!addExp&&<button onClick={AddExpeHandler}>Add New Expense</button>}
            {addExp&&<ExponseForm IfCanceled={VisbilityHandler} PassFrChiledToPar={saveExpenceDate}/>}
        </div>
    )
}

export default NewExpense
