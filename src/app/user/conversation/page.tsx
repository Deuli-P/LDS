"use client";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleUp, faCamera, faImage, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [params]);

  return (
    <>
      
      <Link href="/user/dashboard" className="back-pic"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /> Retour</Link>


      <section className="conversation-ctn">
        <h2>Conversation</h2>

        <div className="conversation-div other-div">
          <audio src="/sons/what-is-that-101236.mp3" controls className="conversation-bulle translation other"></audio>
          <p className="conversation-bulle other">Exercitationem eos autem nihil ratione fugiat doloribus voluptatem sit expedita ex eum.</p>
        </div>


        <div className="conversation-div me-div">
          <img src="/images/avatar.jpg" alt="avatar LDS" className="conversation-bulle translation me"/>
          <p className="conversation-bulle me">Temporibus facilis exercitationem dolores cumque! Tempora optio perspiciatis dolorum earum, quo praesentium?</p>
        </div>

        <div className="conversation-div other-div">
          <audio src="/sons/what-is-that-101236.mp3" controls className="conversation-bulle translation other"></audio>
          <p className="conversation-bulle other">Repellendus ipsa ad placeat voluptatum dolor ab, vero tenetur labore blanditiis cupiditate?</p>
        </div>

        <div className="conversation-div me-div">
          <img src="/images/avatar.jpg" alt="avatar LDS" className="conversation-bulle translation me"/>
          <p className="conversation-bulle me">Reiciendis adipisci beatae consequuntur veniam eaque, porro velit eum harum eveniet quo.</p>
        </div>

        <div className="conversation-div other-div">
          <audio src="/sons/what-is-that-101236.mp3" controls className="conversation-bulle translation other"></audio>
          <p className="conversation-bulle other">Molestias nemo vitae consequatur recusandae neque eaque vero magnam saepe repudiandae ab.</p>
        </div>
        <div className="conversation-div me-div">
          <img src="/images/avatar.jpg" alt="avatar LDS" className="conversation-bulle translation me"/>
          <p className="conversation-bulle me">Temporibus facilis exercitationem dolores cumque! Tempora optio perspiciatis dolorum earum, quo praesentium?</p>
        </div>

        <div className="conversation-div other-div">
          <audio src="/sons/what-is-that-101236.mp3" controls className="conversation-bulle translation other"></audio>
          <p className="conversation-bulle other">Repellendus ipsa ad placeat voluptatum dolor ab, vero tenetur labore blanditiis cupiditate?</p>
        </div>

        <div className="conversation-div me-div">
          <img src="/images/avatar.jpg" alt="avatar LDS" className="conversation-bulle translation me"/>
          <p className="conversation-bulle me">Reiciendis adipisci beatae consequuntur veniam eaque, porro velit eum harum eveniet quo.</p>
        </div>

        <div className="conversation-div other-div">
          <audio src="/sons/what-is-that-101236.mp3" controls className="conversation-bulle translation other"></audio>
          <p className="conversation-bulle other">Molestias nemo vitae consequatur recusandae neque eaque vero magnam saepe repudiandae ab.</p>
        </div>

      </section>

      <form className="send-message">
        <button><FontAwesomeIcon icon={faImage} size="lg" className="send-pic"/></button>
        <button><FontAwesomeIcon icon={faCamera} size="lg" className="send-pic"/></button>
        <button><FontAwesomeIcon icon={faMicrophone} size="lg" className="send-pic"/></button>
        <input type="text" name="message" placeholder="Aa"/>
        <button><FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" className="send-pic"/></button>
       </form>


    </>
  );
};

export default Chat;
