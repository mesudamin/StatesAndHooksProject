import React from 'react'

export default function IncreaseDecreaseCount() {
  return (
    <div className='hookDiv'>
      <p className='hookdis' >Initial click count:0</p>
      <button className='hookbtn'>Reset count </button> 
      <button className='hookbtn gap'>Increase count</button> 
      <button className='hookbtn'>Decrease count</button> 

    </div>
  )
}
