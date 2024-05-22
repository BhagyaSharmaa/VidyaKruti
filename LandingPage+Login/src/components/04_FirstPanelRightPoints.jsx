import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


function FirstPanelRightPoints({text}) {
  return (
    <div className=' h-auto w-auto m-2 flex flex-row'>
        <FaCheckCircle color="white" size={30} className='m-3'/> 
        <h3 className='m-3  text-xl text-white'>{text}</h3>

        

      
    </div>
  )
}

export default FirstPanelRightPoints
