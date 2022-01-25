import React from 'react';
import ExpenseItem from '../../ExpenseComponent/expenceItem/ExpenseItems';
import './ExpensesList.css'
const ExpensesList = (props) => {
    
    if(props.items.length===0){
        return<h2 className=' expenses-list__fallback'>No Items Here!</h2>
    }
     
  return <ul className='expenses-list'>
      {
          
            props.items.map((expen,index)=>{
    
                return <ExpenseItem  key={index} title={expen.title} amount={ expen.amount} date={ expen.date}></ExpenseItem>
            }
            )
      }
  </ul>;
};

export default ExpensesList;
