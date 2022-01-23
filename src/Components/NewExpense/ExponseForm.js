import React,{useState} from 'react'
import './ExponseForm.css'
function ExponseForm() {
    const [userObject,setUserObject]=useState({enteredTitle:'',
enteredAmount:'',
enteredDate:''
})
    const titlechanged=(event)=>{
       // console.log(event.target.value);
        setUserObject({
            ...userObject,
            enteredTitle:event.target.value,
        })
    }
    const Amountchanged=(event)=>{
        setUserObject({
            ...userObject,
            enteredAmount:event.target.value,
        })
    }
    const Datechanged=(event)=>{
        setUserObject({
            ...userObject,
            enteredDate:event.target.value,
        })
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titlechanged} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={Amountchanged} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min ='2018-01-01' max='2022-12-31' onChange={Datechanged} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExponseForm
