import { createContext, useState } from "react";
import main from "../config/gemini";


export const context = createContext()



const ContextProvider = (props)=>{
    
    const [input,setInput] = useState("")
    const [recentPrompt,setRecentprompt] = useState("")
    const [prevPrompt,setPrevprompt] = useState([])
    const [showResult,setResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultdata] = useState("")

    
    const onSent = async (prompt)=>{
        setResultdata("")
        setLoading(true)
        setResult(true)
        setRecentprompt(input)
        const response = await main(input) 
        let responseArray = response.split("**")
        let responseArraySingle = response.split("*")
        let newArray
        for(let i=0;i<responseArray.length;i++){
            if(i%2===0){
                newArray+=responseArray[i]
            } else{
                newArray+="<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse = newArray.split("*").join("<br/>")
        setResultdata(newResponse)
        setLoading(false)
        setInput("")
    }
    

      const constValue = {
        prevPrompt,
        setPrevprompt,
        onSent,
        recentPrompt,
        setRecentprompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
        
    }

    return (
        <div>
            <context.Provider value={constValue}>
                {props.children}
            </context.Provider>
        </div>
    )

}


export default ContextProvider