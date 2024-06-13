import React from 'react'
import Messages from '@/components/Messages/Messages'

const Conversation = () => {
  let user = 'other'
  return (
    <div className=
      {user === 'other' ? 
        'w-full h-[40rem] overflow-y-auto bg-background' 
        : 
        'w-full h-[25rem] overflow-y-auto bg-background' 
      }>
      <Messages></Messages>
    </div>
  )
}

export default Conversation
