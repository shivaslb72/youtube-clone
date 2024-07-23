import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/chatSlice'

const LiveChat = () => {
    const[liveMessage,setLiveMessage] = useState('')
    const dispatch = useDispatch()
    const chatMessages = useSelector((store)=>store.chat.messages)
    useEffect(() => {
        const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
        const messages = ["Great job!", "Interesting topic.", "I have a question.", "Looking forward to updates.", "Thank you!", "I disagree.", "Impressive!", "Clarify this statement.", "Appreciate the effort."];
    
        const timer = setInterval(() => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
            dispatch(addMessage({
                name: randomName,
                message: randomMessage
            }));
        }, 2000);
    
        return () => clearInterval(timer);
    }, []);
    
  return (
   <>
    <div className='h-[600px] w-full ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {
        chatMessages.map((c,index)=>(
            <ChatMessage key={index} name={c.name} message={c.message}/>
        ))
      }
      

    </div>
    <form onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({name:"shiva",message:liveMessage}))
        setLiveMessage("")
    }}className='w-full  p-2 ml-2 border border-black'>
        <input  className="w-[222px] px-2" type='text' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-2 bg-green-100 '>Send</button>
    </form>

  

   </>
  )
}

export default LiveChat
