import React, { use } from 'react'
import Chat from '@/components/Conversation/Conversation'
import Avatar from '@/components/Avatar/Avatar'
import Camera from '@/components/Camera/Camera'

import './style.css'


const Page = () => {
  return (
    <div className='container'>
      <div className='chatContainer'>
        <div className='chatBox'>
          <Chat></Chat>
        </div>
      </div>
      <div className='entryContainer'>
        <div className='videoContainer'>
          <Camera></Camera>
        </div> 
        <div className='avatarContainer'>
          <Avatar></Avatar>
        </div>         
      </div>
    </div>
  )
}

export default Page
