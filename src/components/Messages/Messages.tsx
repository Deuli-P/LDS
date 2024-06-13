import React from 'react'
import Image from 'next/image'
// import './style.css'

/**
 * @param {Number} id auto increment
 * @param {String} entry src message entry video or audio or text
 * @param {String} content content of message response
 * @param {Date} dateTime 
 */
const Msgs = [
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

const Messages = () => {
  return (
    <div>
      <div className='messages w-full bg-background-light p-1'>

      {Msgs.map((e) => (
        <div key={e.id} className={`conversation-div ${e.username}-div`}>
          {/* <p className='text-background-dark'>{e.username}</p> */}
          {e.username === 'me' ? 
            e.entry === 'audio' ? (
              <>
                <audio
                  src="/sons/what-is-that-101236.mp3"
                  controls
                  className={`conversation-bulle bg-background-light dark:bg-background-dark text-secondary w-250`}
                ></audio>
                  <div className={`conversation-bulle bg-background-light dark:bg-background-dark`}>
                    <p className='text-texte-dark'>{e.content}</p>
                    <p className='text-texte-dark space-x-48'>
                      <span className='italic text-texte-light dark:text-texte-dark'>transcription</span>
                      <span className='italic text-texte-light dark:text-texte-dark'>{e.dateTime}</span>  
                    </p>
                </div>
              </>
            ) : e.entry === 'video' ? (
              <>
                <Image
                  src="/assets/images/avatar/avatar.jpg"
                  alt="avatar LDS"
                  width={50}
                  height={50}
                  className={`conversation-bulle bg-background-light dark:bg-background-dark w-250`}
                />
                  <div className={`conversation-bulle bg-background-light dark:bg-background-dark`}>
                    <p className='text-texte-dark'>{e.content}</p>
                    <p className='text-texte-dark space-x-48'>
                      <span className='italic text-texte-light dark:text-texte-dark'>transcription</span>
                      <span className='italic text-texte-light dark:text-texte-dark'>{e.dateTime}</span>
                    </p>
                </div>
              </>
            ) : e.entry === 'text' ? (
              <>
                <div className={`conversation-bulle bg-background-light dark:bg-background-dark`}>
                  <p className='text-texte-dark'>{e.content}</p>
                  <p className='text-texte-dark space-x-48'>
                    <span className='italic text-texte-light dark:text-texte-dark'>transcription</span>
                    <span className='italic text-texte-light dark:text-texte-dark'>{e.dateTime}</span>
                  </p>
                </div>
              </>
            ) : null
          :
            e.entry === 'audio' ? (
              <>
                <audio
                  src="/sons/what-is-that-101236.mp3"
                  controls
                  className={`conversation-bulle bg-secondary-dark dark:bg-secondary-light text-texte-dark w-250`}
                ></audio>
                  <div className={`conversation-bulle bg-secondary-dark dark:bg-secondary-light`}>
                    <p className='text-texte-light dark:text-texte-dark'>{e.content}</p>
                    <p className='text-texte-light dark:text-texte-dark space-x-48'>
                      <span className='italic text-texte-light dark:text-texte-dark'>transcription</span>
                      <span className='italic text-texte-light dark:text-texte-dark'>{e.dateTime}</span>
                    </p>
                  </div>
              </>
            ) : e.entry === 'video' ? (
              <>
                <Image
                  src="/assets/images/avatar/avatar.jpg"
                  alt="avatar LDS"
                  width={50}
                  height={50}
                  className={`conversation-bulle bg-secondary-dark dark:bg-secondary-light w-250`}
                />
                  <div className={`conversation-bulle bg-secondary-dark dark:bg-secondary-light`}>
                    <p className='text-texte-light dark:text-texte-dark'>{e.content}</p>
                    <p className='text-texte-lighht dark:texte-texte-dark space-x-48'>
                      <span className='italic text-texte-light dark:text-texte-dark'>transcription</span>
                      <span className='italic text-texte-light dark:text-texte-dark'>{e.dateTime}</span>
                    </p>
                  </div>
              </>
            ) : e.entry === 'text' ? (
              <>
                <div className={`conversation-bulle bg-secondary-dark dark:bg-secondary-light`}>
                  <p className='text-texte-light dark:text-texte-dark'>{e.content}</p>
                  <p className='text-texte-light dark:textr-texte-dark space-x-48'>
                    <span className='italic text-texte-light dark:text-texte-dark'>transcription</span>
                    <span className='italic text-texte-light dark:text-texte-dark'>{e.dateTime}</span>
                  </p>
                </div>
              </>
            ) : null
          }
        </div>
      ))}
        
      </div>
    </div>
    
  )
}

export default Messages

{/* { Messages[0].entry === 'video' &&
          <p className="user">{Messages[0].content}</p>
        }
        { Messages[1].entry === 'audio' && 
          <p className="other">{Messages[1].content}</p>
        }
        <p className='other'>{Messages[0].username} à {Messages[0].dateTime} : {Messages[0].content}</p>
        <p className='user'>{Messages[1].username} à {Messages[1].dateTime} : {Messages[1].content}</p>
        <p className='other'>{Messages[2].username} à {Messages[2].dateTime} : {Messages[2].content}</p> */}
