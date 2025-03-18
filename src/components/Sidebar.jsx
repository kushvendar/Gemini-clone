import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Sidebar() {
    const [extend,setExtend]=useState(false)

  return (
    <div className='inline-flex flex-col min-h-screen justify-between bg-[#f0f4f9] pt-[25px] pb-[25px] pl-[15px] pr-[15px]'>
      <div>        
        <div onClick={()=>{setExtend(prev=>!prev)}}><img src={assets.menu_icon} className='w-[20px] block ml-[10px] cursor-pointer' alt="menu" />
        </div>
        <div className='mt-[50px] inline-flex items-center gap-[10px] pt-[10px] pb-[10px] pr-[15px] pl-[15px] bg-[#e6eaf1] rounded-[50px] text-gray-600 text-[14px] cursor-pointer'>
            <img src={assets.plus_icon} className='w-[20px]' alt="plusicon" />
            {extend?<p className='font-[outfit]'>New Chat</p>:null}
        </div>
        <div className='flex flex-col '>
            {extend?<p className='mt-[30px] mb-[20px] font-[outfit]'>Recent</p>:null}
            <div className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
            {extend?<img src={assets.message_icon} className='w-[20px]' alt="message" />:null}
            {extend?<p className='font-[outfit]'>What is React ...</p>:null}
            </div>
            
        </div>
        </div>
      <div className='flex flex-col'>
        <div className='flex hover:bg-[#e2e6eb] cursor-pointer gap-[10px] p-[10px] text-[#282828] items- rounded-[50px]'>
        <img src={assets.question_icon} className='w-[24px]' alt="" />
        {extend?<p className='font-[outfit]'>Help</p>:null}
        </div>
        <div className='flex hover:bg-[#e2e6eb] pr-[10px] cursor-pointer gap-[10px] p-[10px] text-[#282828] items- rounded-[50px]'>
        <img src={assets.history_icon} className='w-[24px]' alt="" />
        {extend?<p className='font-[outfit]'>Activity</p>:null}
        </div>
        <div className='flex hover:bg-[#e2e6eb] pr-[10px] cursor-pointer gap-[10px] p-[10px] text-[#282828] items- rounded-[50px]'>
        <img src={assets.setting_icon} className='w-[24px]' alt="" />
        {extend?<p className='font-[outfit]'>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
