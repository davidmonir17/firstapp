import './App.css';
import ExpenseItem from './Components/expenceItem/ExpenseItems';
import Expences from './Components/Expences/expences';

function App() {
  const expenses=[
    { 
      id:'e1',
      title:'Car Insurance',
      amount:297.25,
       date:new Date(2021,2,28)
    },
    { 
      id:'e2',
      title:'Car2 Insurance',
      amount:350.25,
      date:new Date(2022,5,28)
    },
    {
       id:'e3',
       title:'Car3 Insurance',
       amount:257.25, 
       date:new Date(2021,9,20)
    },
   ];
  return (
    <div className='App' >
      <div>
        <h1>Items List</h1>
          <div>
            <Expences expenses={expenses}/>
          </div >
           
      </div>
    </div>
 
     

  )
}

export default App;
//  {/* {
//         expenses.forEach(element=>{
//           <ExpenseItem title={element.title} amount={element.amount} date={element.date}/>
//         })
//       } */}