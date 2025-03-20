import React from 'react'
import { assets } from '../assets/assets'

function Main() {
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className='flex items-center justify-between text-[22px] p-[20px] text-[#585858]'>
        <p>Gemini</p>
        <img src={assets.user_icon} className='w-[40px] rounded-[50%]' alt="user_img" />
      </div>
      <div className='max-w-4xl m-auto'>
        <div className='m-[50px] mr-0 ml-0 text-[56px] font-medium p-[20px] text-[#c4c7c5]'>
        <p><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]'>Hello, Kush.</span></p>
        <p>How can i help you today ?</p>
        </div>
        {/* gird cols */}
      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px]'>
        <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] font-[17px]'>Suggest some beautiful places to see an upcoming road trip</p>
              <img src={assets.compass_icon} className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' alt="" />
        </div>
        <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] font-[17px]'>Summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] ' alt="" />
        </div>
        <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] font-[17px]'>Brainstrom team bonding activites for our work retreat</p>
              <img src={assets.message_icon} className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' alt="" />
        </div>
        <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] font-[17px]' >Imporove the readability of the following code</p>
              <img src={assets.code_icon} className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' alt="" />
        </div>
    </div>
      {/* bottom */}
      <div className='absolute bottom-0 w-[100%] max-w-[900px] pr-[20px] pl-[20px] m-auto'>
        <div className='flex bg-[#f0f4f9] items-center justify-between pt-[10px] pb-[10px] pr-[20px] pl-[20px] gap-[20px] rounded-[50px] '>
          <input type="text" placeholder='Enter a prompt here' className='flex-1 bg-transparent p-[8px] font-[14px]' />
          <div className='flex flex-row gap-[15px] items-center'>
            <img className='w-[24px] cursor-pointer' src={assets.gallery_icon} alt="" />
            <img className='w-[24px] cursor-pointer' src={assets.mic_icon} alt="" />
            <img className='w-[24px] cursor-pointer' src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className='text-[13px] m-[10px] ml-auto mr-auto text-center font-light'>Gemini may diplay inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps. </p>
      </div>
      </div>
    </div>
  )
}


export default Main
