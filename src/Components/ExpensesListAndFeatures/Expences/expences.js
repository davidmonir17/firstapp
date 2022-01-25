import React, { useState } from 'react'
import Card from '../../ExpenseComponent/Card/Card'
import ExpenseChart from '../ExpenseChart'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
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
        <li>
        <Card className="expenses">
            <ExpensesFilter  val={selectedTime} onSelctChange={FilterSelcHandler}/>
                <ExpenseChart  expenses={filteredExpenses} />
             <ExpensesList items={filteredExpenses}/>
            
        </Card>
        </li>
    )
}

export default Expences
