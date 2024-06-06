import React from 'react'
import './style.css'

const Messages = [
  {
    id:0,
    entry: 'video',
    username:'test1',
    content: 'Hello World',
  },
  {
    id:1,
    entry: 'audio',
    username: 'test2',
    content: 'Hello test1, how are you ?'
  }
]

const Message = () => {
  return (
    <div>
      <div className='message text-white' style={{width: '100%'}}>
        <p className='text-blanc guest'>This is the test</p>
        { Messages[0].entry === 'video' &&
          <p className="user">{Messages[0].content}</p>
        }
        { Messages[1].entry === 'audio' && 
          <p className="guest">{Messages[1].content}</p>
        }
        <p className='guest'>{Messages[0].username} : {Messages[0].content}</p>
        <p className='user'>2nd response</p>
        <p className='guest'>3rd response</p>
      </div>
    </div>
    
  )
}

export default Message
