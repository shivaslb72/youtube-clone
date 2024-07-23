import React from 'react'
const commentsData = [
    {
        name: "Alice",
        text: "Great job on this!",
        replies: [
            {
                name: "Bob",
                text: "Thanks, Alice!",
                replies: [
                    { name: "Alice", text: "You're welcome, Bob!", replies: [] }
                ]
            },
            {
                name: "Charlie",
                text: "I agree, well done!",
                replies: []
            }
        ]
    },
    {
        name: "Bob",
        text: "Interesting topic, thanks for sharing!",
        replies: [
            {
                name: "Alice",
                text: "Glad you found it interesting!",
                replies: []
            }
        ]
    },
    {
        name: "Charlie",
        text: "I have a question about this point.",
        replies: [
            {
                name: "David",
                text: "Sure, what's your question?",
                replies: [
                    {
                        name: "Charlie",
                        text: "Of course, here's more detail.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Emma",
        text: "Looking forward to more updates.",
        replies: []
    },
    {
        name: "Frank",
        text: "This is very helpful, thank you!",
        replies: []
    },
    {
        name: "Grace",
        text: "I disagree with this viewpoint.",
        replies: [
            {
                name: "Henry",
                text: "Why do you disagree?",
                replies: []
            }
        ]
    },
    {
        name: "Henry",
        text: "Impressive analysis, well done!",
        replies: []
    },
    {
        name: "Ivy",
        text: "Could you clarify this statement?",
        replies: []
    },
    {
        name: "Jack",
        text: "I appreciate the effort put into this.",
        replies: []
    }
];


const Comment =({data}) =>{
    const {name,text,replays} = data
    return(
        <div className='flex shadow-sm rounded-lg bg-gray-100 my-2'>
            <div className='px-3 flex flex-row'>
            <img className="w-12 h-12" alt='commentpic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnWgZDAdXZemvgse9Ky3sguQEMSeVUkxkcsk_ZFvu9uLsbaEAjdfBLamh7giYmG6vWZs&usqp=CAU'/>

                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList =({comments})=>{
return comments.map((comment,index)=>(
   <div  key={index}>
     <Comment  data={comment}/>
     <div className='ml-5 border  border-l-black pl-5'>
     <CommentsList comments={comment.replies}/>
   
     </div>
   </div>
))
}

const CommentsContainer = () => {
  return (
    <div className='m-2 p-5'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
