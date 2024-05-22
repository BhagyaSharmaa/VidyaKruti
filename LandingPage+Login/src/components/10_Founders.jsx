import React from 'react'
import MainLogo from './01_MainLogo'
import FoundersCards from './11_FoundersCards'
import founder1 from "../images/founder1.jpeg"
import founder2 from "../images/founder2.jpg"
import des1 from "../images/des1.jpg"
import des2 from "../images/des2.jpg"


function Founders() {
  return (
    <div className='w-auto h-auto '>
        <div className='pt-5 pb-10 flex flex-row items-center align-centter justify-center'>
        <MainLogo
              text="Founders"
              textSize="56px"
              textColor="white"
              logoSize="300px"
            />
        </div>
        <div>
            <div className='h-auto w-auto flex flex-row items-center align-center justify-center'>
              <FoundersCards image={founder1} des={des1}/>
              <FoundersCards image={founder2} des={des2}/>
              
              

            </div>
        </div>
        


      
    </div>
  )
}

export default Founders
