import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-1'>
     <img
          className="h-8"
          alt="userIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnWgZDAdXZemvgse9Ky3sguQEMSeVUkxkcsk_ZFvu9uLsbaEAjdfBLamh7giYmG6vWZs&usqp=CAU"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
