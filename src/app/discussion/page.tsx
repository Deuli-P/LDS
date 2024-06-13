import React, { useEffect } from 'react'
import Link from 'next/link';
// import { useParams } from "react-router-dom";

import Chat from '@/components/Conversation/Conversation'
import Avatar from '@/components/Avatar/Avatar'
import Camera from '@/components/Camera/Camera'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";


const Page = () => {
  let user = 'me'
  // let srcEntry:boolean = true;
  // const params = useParams();

  // useEffect(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // }, [params]);


  return (
    <>
      <div>
        <Link href="/user/dashboard" className="back-pic"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /> Retour</Link>
      </div>
      { user === 'me' ? 
        <div className='container'>
        
          <div className='
            fixed 
            top-0 
            h-3/5 
            maw-w-full 
            flex flex-row
            z-30 
            bg-texte-dark
          '> 
            <div className='m-2.5'>
              <Avatar />
            </div> 
            <div className='m-2.5'>
              <Camera/>
            </div>  
                
          </div>
          <div className='relative mt-2.5'>
            <div className='mt-56 absolute'>
              <Chat></Chat>
            </div>
          </div>
        </div>
        : 
          <div className='container'>
            <div className='entryContainer'>
              <div className='chatContainer'>
                <div className='chatBox'>
                  <Chat></Chat>
                </div>
              </div>
                            
              <div className='avatarContainer'>
                <Camera />
              </div>  
                
            </div>
          </div>
        }
      
    </>
  )
}

export default Page
