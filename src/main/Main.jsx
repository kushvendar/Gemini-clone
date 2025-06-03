import { assets } from '../assets/assets'
import { useContext } from 'react'
import { context } from '../components/context/Context'

// 1:23:00

function Main() {

  const { prevPrompt, setPrevprompt, onSent, recentPrompt, setRecentprompt, showResult, loading, resultData, input, setInput} = useContext(context)

  const handleKeydown = async(e)=>{
    if(e.key==="Enter"){      
      onSent()
      input=""
      
    }
  }

  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className='flex items-center justify-between text-[22px] p-[20px] text-[#585858]'>
        <p>Gemini</p>
        <img src={assets.user_icon} className='w-[40px] rounded-[50%]' alt="user_img" />
    </div> 
      <div className='max-w-4xl m-auto'>
      {!showResult ? <>
              <div className='m-[50px] mr-0 ml-0 text-[56px] font-medium p-[20px] text-[#c4c7c5]'>
        <p><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]'>Hello Kush</span></p>
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
            <p className='text-[#585858] font-[17px]'>Brainstorm team bonding activites for our work retreat</p>
              <img src={assets.message_icon} className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' alt="" />
        </div>
        <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] font-[17px]' >Imporove the readability of the following code</p>
              <img src={assets.code_icon} className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' alt="" />
        </div>
    </div>
    </>:
    <div className='pl-[5%] pr-[5%] max-h-[70vh] overflow-y-scroll '>
      <div className='mt-[40px] mb-[40px] flex items-center gap-[20px] '>
        <img className='w-[40px] rounded-[50px]' src={assets.user_icon} alt="userlogo" />
        <p>{recentPrompt}</p>
      </div>
      <div className='flex items-start gap-[20px]'>
        <img className='h-[47px]' src={assets.gemini_icon} alt="gemini" />
        {loading?<div className='w-100 flex flex-col gap-[10px]'> <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-size-[800px] bg-[50px] h-[20px] animate-pulse' /><hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-size-[800px] bg-[50px] h-[20px] animate-pulse' /><hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-size-[800px] bg-[50px] h-[20px] animate-pulse' /></div>:
        <p className='text-[17px] font-light leading-[1.8]' dangerouslySetInnerHTML={{__html:resultData}}></p>}
      </div>
    </div>
      }
      {/* bottom */}
      <div className='absolute bottom-0 w-[100%] max-w-[900px] pr-[20px] pl-[20px] m-auto'>
        <div className='flex bg-[#f0f4f9] items-center justify-between pt-[10px] pb-[10px] pr-[20px] pl-[20px] gap-[20px] rounded-[50px] '>
          <input type="text" placeholder='Enter a prompt here' className='flex-1 bg-transparent p-[8px] font-[14px] outline-none' onChange={(e)=>setInput(e.target.value)} onKeyDown={handleKeydown} value={input} />
          <div className='flex flex-row gap-[15px] items-center'>
            <img className='w-[24px] cursor-pointer' src={assets.gallery_icon} alt="" />
            <img className='w-[24px] cursor-pointer' src={assets.mic_icon} alt="" />
            <img className='w-[24px] cursor-pointer' src={assets.send_icon} alt="" onClick={()=>onSent()} />
          </div>
        </div>
        <p className='text-[13px] m-[10px] ml-auto mr-auto text-center font-light'>Gemini can make mistakes, so double-check it</p>
      </div>
      </div>
    </div>
  )
}


export default Main
