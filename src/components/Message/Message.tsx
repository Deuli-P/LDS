import React from 'react'
import './style.css'

const Messages = [
  {
    id:0,
    username:'test1',
    content: 'Hello World',
  },
  {
    id:1,
    username: 'test2',
    content: 'Hello test1, how are you ?'
  }
]

const Message = () => {
  return (
    <div>
      <div className='message text-white' style={{width: '100%'}}>
        <p className='text-blanc'>This is the test</p>
        <p>1st response</p>
        <p>2nd response</p>
        <p>3rd response</p>
      </div>
    </div>
    
  )
}

export default Message
