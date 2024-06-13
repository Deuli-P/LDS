import React from 'react'
import Image from 'next/image'
// import './style.css'

/**
 * @param {Number} id auto increment
 * @param {String} entry src message entry video or audio or text
 * @param {String} content content of message response
 * @param {Date} dateTime 
 */
const Messages = [
  {
    id:0, /** auto increment */
    entry: 'audio',
    username:'other',
    content: 'Exercitationem eos autem nihil ratione fugiat doloribus voluptatem sit expedita ex eum.',
    dateTime: '11:30'
  },
  {
    id:1,
    entry: 'video',
    username: 'me',
    content: 'Temporibus facilis exercitationem dolores cumque! Tempora optio perspiciatis dolorum earum, quo praesentium?',
    dateTime: '11:32'
  },
  {
    id: 2,
    entry: 'audio',
    username: 'other',
    content: 'Repellendus ipsa ad placeat voluptatum dolor ab, vero tenetur labore blanditiis cupiditate?',
    dateTime: '11:33'
  },
  {
    id: 3,
    entry: 'video',
    username: 'me',
    content: 'Reiciendis adipisci beatae consequuntur veniam eaque, porro velit eum harum eveniet quo.',
    dateTime: '11:34'
  },
  {
    id: 4,
    entry: 'text',
    username: 'other',
    content: 'Molestias nemo vitae consequatur recusandae neque eaque vero magnam saepe repudiandae ab.',
    dateTime: '11:36'
  },
  {
    id: 5,
    entry: 'video',
    username: 'me',
    content: 'Temporibus facilis exercitationem dolores cumque! Tempora optio perspiciatis dolorum earum, quo praesentium?',
    dateTime: '11:37'
  },
  {
    id: 6,
    entry: 'audio',
    username: 'other',
    content: 'Repellendus ipsa ad placeat voluptatum dolor ab, vero tenetur labore blanditiis cupiditate?',
    dateTime: '11:41'
  },
  {
    id: 7,
    entry: 'video',
    username: 'me',
    content: 'Reiciendis adipisci beatae consequuntur veniam eaque, porro velit eum harum eveniet quo.',
    dateTime: '11:41'
  },
  {
    id: 8,
    entry: 'text',
    username: 'other',
    content: 'Molestias nemo vitae consequatur recusandae neque eaque vero magnam saepe repudiandae ab.',
    dateTime: '11:42'
  }
]

const Message = () => {
  return (
    <div>
      <div className='message' style={{width: '100%'}}>

      {Messages.map((e) => (
        <div key={e.id} className={`conversation-div ${e.username}-div`}>
          {e.username} à {e.dateTime}
          {e.username === 'me' ? 
            e.entry === 'audio' ? (
              <>
                <audio
                  src="/sons/what-is-that-101236.mp3"
                  controls
                  className={`conversation-bulle bg-primary text-secondary w-250`}
                ></audio>
                <p className={`conversation-bulle bg-primary text-texte-dark`}>{e.content}</p>
              </>
            ) : e.entry === 'video' ? (
              <>
                <Image
                  src="/assets/images/avatar/avatar.jpg"
                  alt="avatar LDS"
                  width={50}
                  height={50}
                  className={`conversation-bulle w-250`}
                />
                <p className={`conversation-bulle bg-primary text-texte-dark`}>{e.content}</p>
              </>
            ) : e.entry === 'text' ? (
              <p className={`conversation-bulle bg-primary text-texte-dark`}>{e.content}</p>
            ) : null
            :
            e.entry === 'audio' ? (
              <>
                <audio
                  src="/sons/what-is-that-101236.mp3"
                  controls
                  className={`conversation-bulle bg-secondary text-texte-dark w-250`}
                ></audio>
                <p className={`conversation-bulle bg-secondary text-texte-dark`}>{e.content}</p>
              </>
            ) : e.entry === 'video' ? (
              <>
                <Image
                  src="/assets/images/avatar/avatar.jpg"
                  alt="avatar LDS"
                  width={50}
                  height={50}
                  className={`conversation-bulle w-250`}
                />
                <p className={`conversation-bulle bg-secondary text-texte-dark`}>{e.content}</p>
              </>
            ) : e.entry === 'text' ? (
              <p className={`conversation-bulle bg-secondary text-texte-dark`}>{e.content}</p>
            ) : null
          }
        </div>
      ))}
        
      </div>
    </div>
    
  )
}

export default Message

{/* { Messages[0].entry === 'video' &&
          <p className="user">{Messages[0].content}</p>
        }
        { Messages[1].entry === 'audio' && 
          <p className="other">{Messages[1].content}</p>
        }
        <p className='other'>{Messages[0].username} à {Messages[0].dateTime} : {Messages[0].content}</p>
        <p className='user'>{Messages[1].username} à {Messages[1].dateTime} : {Messages[1].content}</p>
        <p className='other'>{Messages[2].username} à {Messages[2].dateTime} : {Messages[2].content}</p> */}
