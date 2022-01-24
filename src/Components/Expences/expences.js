import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseItem from '../expenceItem/ExpenseItems'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import './Expences.css'

const Expences = (props) => {
     const [expens,StetExpens]=useState([...props.expenses]);
     const [selectedTime,SetTimeSelected]=useState('2021');
    
    const filteredExpenses= props.expenses.filter(xpe=>{
        return xpe.date.getFullYear().toString()===selectedTime;
    })
    
 const FilterSelcHandler=(selctValue)=>{
    //console.log(selctValue);
    //console.log(selctValue+'in handler');
    SetTimeSelected(selctValue);
    //filterArray(selctValue)

 }
    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter  val={selectedTime} onSelctChange={FilterSelcHandler}/>
             {
                filteredExpenses.length==0?(<p>No Items Here!</p>):(
               filteredExpenses.map((expen,index)=>{
 
                    return <ExpenseItem  key={index} title={expen.title} amount={ expen.amount} date={ expen.date}></ExpenseItem>
                }
                ))
             }
            
        </Card>
        </div>
    )
}

export default Expences
