"use client";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleUp, faCamera, faImage, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const NewChat = () => {

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [params]);

  return (
    <>
      
      <Link href="/user/dashboard" className="back-pic"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /> Retour</Link>


      <section className="conversation-ctn">
        <h2>Nouvelle Conversation</h2>

        <div className="conversation-div new-div">
          <img src="/images/avatar.jpg" alt="avatar LDS" className="conversation-bulle translation new"/>
          <p className="conversation-bulle new">Ecrivez un message ou envoyez un message vocal et je le traduirait en Langue des Signes Française pour vous.</p>
        </div>


      </section>

      <form className="send-message">
        <button><FontAwesomeIcon icon={faImage} size="lg" className="send-pic"/></button>
        <button><FontAwesomeIcon icon={faCamera} size="lg" className="send-pic"/></button>
        <button><FontAwesomeIcon icon={faMicrophone} size="lg" className="send-pic"/></button>
        <input type="text" name="message" placeholder="Aa"/>
        <button><FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" className="send-pic"/></button>

        {/* Une fois le premier message envoyé et stocké en bdd on redirige l'utilisateur automatiquement vers /user/conversation/:conversationID */}
       </form>


    </>
  );
};

export default NewChat;
