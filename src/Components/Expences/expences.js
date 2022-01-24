import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseItem from '../expenceItem/ExpenseItems'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import './Expences.css'

const Expences = (props) => {
    // const [expens,StetExpens]=useState([...props.expenses]);
     const [selectedTime,SetTimeSelected]=useState('2021');
     //#region  function for select
    // const filterArray=(selectvalue)=>{
    //     console.log(selectvalue+'in function ');
    //     if(selectvalue!=null)
    //     {
    //         console.log(expens);
    //         StetExpens(null);
    //         console.log(expens);
    //         props.expenses.map((expen,index)=>{
    //             console.log(expen.date.getFullYear()==selectvalue);
                
    //             if(expen.date.getFullYear()==selectvalue)
    //             {
    //                 StetExpens({
                       
    //                     expen,
    //                 });
    //                 console.log('expens');
    //                 console.log(expens);
    //             }
    //         });
                    
    //     }
        
    // }
    //#endregion
 const FilterSelcHandler=(selctValue)=>{
    //console.log(selctValue);
    //console.log(selctValue+'in handler');
    SetTimeSelected(selctValue);

 }
    return (
        <div>
        <Card className="expenses">
         <ExpensesFilter  val={selectedTime} onSelctChange={FilterSelcHandler}/>
            {
               props.expenses.map((expen,index)=>{

                    return <ExpenseItem  key={index} title={expen.title} amount={ expen.amount} date={ expen.date}></ExpenseItem>
                }
                )
            }
            
        </Card>
        </div>
    )
}

export default Expences
