import React from 'react'
import { assets } from '../assets/assets'

function Main() {
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className='flex items-center justify-between text-[22px] p-[20px] text-[#585858]'>
        <p>Gemini</p>
        <img src={assets.user_icon} className='w-[40px] rounded-[50%]' alt="user_img" />
      </div>
      <div className=''>
        <div className=''>
        <p><span>Hello, Kush</span></p>
        <p>How can i help you today ?</p>
        </div>
        </div>
      <div>
        <div>
            <p>Suggest some beautiful places to see an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
        </div>
        <div>
            <p>Summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
        </div>
        <div>
            <p>Brainstrom team bonding activites for our work retreat</p>
            <img src={assets.message_icon} alt="" />
        </div>
        <div>
            <p>Imporove the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
        </div>
      </div>
    </div>
  )
}


export default Main
