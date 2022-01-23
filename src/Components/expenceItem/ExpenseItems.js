import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenceDate from '../expenceDate/ExpenceDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
   const [title,setTitle]=useState(props.title)
    const clickHnadler=()=>{
        setTitle('Updated');
        console.log (title);
    
    };
    return (
        <Card className="expense-item ">
                <ExpenceDate dat={props.date}/>
            <div className='expense-item__description'>
             <h2>
             {title}
              </h2>   
            <div className='expense-item__price'>$ {props.amount} </div>
            </div>
            <button onClick={clickHnadler}> Make Change</button>
        </Card>
    )
} 

export default ExpenseItem
