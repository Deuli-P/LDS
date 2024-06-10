"use client";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleUp, faCamera, faImage, faMicrophone, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const NewChat = () => {

  const params = useParams();

  // useEffect(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // }, [params]);

  return (
    <>
      
      <div  className="flex justify-between z-50 sticky top-[0] w-[100%] px-8 py-4 bg-purple text-white">
        <Link href="/user/dashboard"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /></Link>
        <button><FontAwesomeIcon icon={faEllipsis} size="xl" /></button>
      </div>


      <section className="w-[90%] mb-32">
        <h2 className="uppercase text-[35px] mt-10">Nouvelle Conversation</h2>

        <div className="flex flex-col items-center">
          <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[250px] mt-10 p-4 rounded-2xl bg-lightGrey"/>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-lightGrey">Ecrivez un message ou envoyez un message vocal et je le traduirait en Langue des Signes Française pour vous.</p>
        </div>
      </section>

      <form className="flex items-center justify-between z-50 fixed bottom-0 bg-yellow w-full h-[60px] p-4 send-message">
        <button><FontAwesomeIcon icon={faImage} size="lg" className="text-purple"/></button>
        <button><FontAwesomeIcon icon={faCamera} size="lg" className="text-purple"/></button>
        <button><FontAwesomeIcon icon={faMicrophone} size="lg" className="text-purple"/></button>
        <input type="text" name="message" placeholder="Aa" className="w-[60%] h-[30px] rounded-full p-4"/>
        <button><FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" className="text-purple"/></button>

        {/* Une fois le premier message envoyé et stocké en bdd on redirige l'utilisateur automatiquement vers /user/conversation/:conversationID */}
       </form>


    </>
  );
};

export default NewChat;
