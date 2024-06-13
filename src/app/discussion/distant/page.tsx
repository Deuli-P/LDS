'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useParams } from "react-router-dom";

import Chat from '@/components/Conversation/Conversation'
import Avatar from '@/components/Avatar/Avatar'
import Entrymessage from '@/components/Entrymessage/Entrymessage'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";


const Page = () => {
  let user = 'other'
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [params]);


  return (
    <>
      <div  className="flex justify-between z-50 fixed top-[0] w-[100%] px-8 py-4 bg-background-light dark:bg-background-dark text-white border-none">
        <Link href="/user/dashboard"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /></Link>
        <p className="text-texte-dark">Correspondant</p>
        <button><FontAwesomeIcon icon={faEllipsis} size="xl" /></button>
      </div>
      { user === 'me' ? 
        <div className='container bg-background-light dark:bg-background-dark'>
        
          <div className='
            fixed 
            mt-16
            top-0 
            h-[21rem]
            maw-w-full 
            flex flex-row
            z-30 
            bg-texte-light
            dark:bg-texte-dark
          '> 
            <div className="relative w-screen max-h-full ">
              <div className='absolute object-cover end-11 w-[70%] m-2.5'>
                <Avatar />
              </div> 
              <div className='absolute bg-noir top-0 w-1/5 h-40 right-1 m-2.5'>
                <Entrymessage/>
              </div> 
            </div>  
          </div>

          <div className='relative'>
            <div className='absolute top-[25rem] h-[22rem]'>
              <Chat></Chat>
            </div>
          </div>
        </div>
        : 
          <div className='container'>
            <div className='relative mt-2.5'>
              <div className='chatContainer'>
                <div className='chatBox mt-16'>
                  <Chat></Chat>
                </div>
              </div>
                            
              <div className='avatarContainer'>
                <Entrymessage />
              </div>  
                
            </div>
          </div>
        }
      
    </>
  )
}

export default Page
