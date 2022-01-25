import React from 'react';
import './ChartBar.css'

const ChartBar = (props) => {
    let barFilHieght='0%'
    if(props.MaxValue>0)
    {
        barFilHieght=Math.round((props.value/props.MaxValue)*100)+'%'
    }
  return  (
  <div className='chart-bar '>
      <div className='chart-bar__inner '>
          <div className='chart-bar__fill' style={{height: barFilHieght}}></div>
      </div>
      <div className='chart-bar__label '>{props.label} </div>
  </div>
  )
};

export default ChartBar;
