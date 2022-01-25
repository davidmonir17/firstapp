import React,{useState} from 'react'
import './ExponseForm.css'
function ExponseForm(props) {
//     const [userObject,setUserObject]=useState({enteredTitle:'',
// enteredAmount:'',
// enteredDate:''
// })
const [enteredtitle,setTitle]= useState('');
const [entereddata,setDate]= useState('');
const [enteredamount,setAmount]= useState('');
    const titlechanged=(event)=>{
        //#region  another way 
       // console.log(event.target.value);
        // setUserObject({
        //     ...userObject,
        //     enteredTitle:event.target.value,
        // })
    //     setUserObject((prevState)=>{

    //         return{
    //             ...prevState,
    //             enteredTitle:event.target.value
    //         }
    // })
    //#endregion
    setTitle(event.target.value)
    }
    const Amountchanged=(event)=>{
         //#region  another way 
        // setUserObject({
        //     ...userObject,
        //     enteredAmount:event.target.value,
        // })
    //     setUserObject((prevState)=>{

    //         return{
    //             ...prevState,
    //             enteredAmount:event.target.value
    //         }
    // })
    //#endregion
    setAmount(event.target.value);
}
    const Datechanged=(event)=>{
         //#region  another way 
        // setUserObject({
        //     ...userObject,
        //     enteredDate:event.target.value,
        // })
        // setUserObject((prevState)=>{

        //     return{
        //         ...prevState,
        //         enteredDate:event.target.value,
        //     }

        // })
        //#endregion
        setDate(event.target.value);
    }
    const CanceledHandler=()=>{
        props.IfCanceled();
    }
    const submitHandler=(event) =>{
        event.preventDefault();
        const ExpenseObject ={
            title:enteredtitle,
            date:new Date(entereddata),
            amount:enteredamount,
        }
        props.PassFrChiledToPar(ExpenseObject)
       // console.log(ExpenseObject);
        setAmount('');
        setTitle('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler }> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                    value={enteredtitle}
                    onChange={titlechanged} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                     min="0.01"
                      step="0.01"
                      value={enteredamount}
                      onChange={Amountchanged} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                    type='date'
                    min ='2018-01-01' 
                    max='2022-12-31' 
                    value={entereddata}
                    onChange={Datechanged} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={CanceledHandler} >Canceled</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExponseForm
