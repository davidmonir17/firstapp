import React from 'react'
import Card from '../Card/Card'
import ExpenseItem from '../expenceItem/ExpenseItems'
import './Expences.css'

const Expences = (props) => {

    return (
        <Card className="expenses">
            {
                props.expenses.map((expen,index)=>{

                    return <ExpenseItem key={index} title={expen.title} amount={ expen.amount} date={ expen.date}></ExpenseItem>
                }
                )
            }
            
        </Card>
    )
}

export default Expences
