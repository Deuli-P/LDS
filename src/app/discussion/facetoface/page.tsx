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
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [params]);


  return (
    <>
      <div  className="flex justify-between z-50 fixed top-[0] w-[100%] px-8 py-4 bg-purple text-white border-none">
        <Link href="/user/dashboard"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /></Link>
        <p className="text-texte-dark">Discussion</p>
        <button><FontAwesomeIcon icon={faEllipsis} size="xl" /></button>
      </div>
        <div className='container'>
            <div className='relative mt-16'>
                <div className='absolute'>
                    <Chat></Chat>
                </div>
            </div>
          <div className='
            fixed 
            mt-0
            bottom-0 
            h-[21rem] 
            maw-w-full 
            flex flex-row
            z-30 
            bg-texte-dark
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
        </div>
      
    </>
  )
}

export default Page
