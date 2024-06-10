"use client";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleUp, faCamera, faImage, faMicrophone, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [params]);

  return (
    <>
      
      <div  className="flex justify-between z-50 sticky top-[0] w-[100%] px-8 py-4 bg-purple text-white border-none">
        <Link href="/user/dashboard"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /></Link>
        <p className="text-fontTitle">Correspondant</p>
        <button><FontAwesomeIcon icon={faEllipsis} size="xl" /></button>
      </div>



      <section className="w-[90%] mb-32">
      <h2 className="uppercase text-[35px] mt-10">Conversation</h2>

        <div className="flex flex-col items-start">
          <audio src="/assets/sons/what-is-that-101236.mp3" controls className="w-[250px] mt-10 p-4 rounded-2xl bg-lightBlue"></audio>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-lightBlue">Exercitationem eos autem nihil ratione fugiat doloribus voluptatem sit expedita ex eum.</p>
        </div>


        <div className="flex flex-col items-end">
          <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[250px] mt-10 p-4 rounded-2xl bg-yellow"/>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-yellow">ICI Temporibus facilis exercitationem dolores cumque! Tempora optio perspiciatis dolorum earum, quo praesentium?</p>
        </div>

        <div className="flex flex-col items-start">
          <audio src="/assets/sons/what-is-that-101236.mp3" controls className="w-[250px] mt-10 p-4 rounded-2xl bg-lightBlue"></audio>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-lightBlue">Repellendus ipsa ad placeat voluptatum dolor ab, vero tenetur labore blanditiis cupiditate?</p>
        </div>

        <div className="flex flex-col items-end">
          <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[250px] mt-10 p-4 rounded-2xl bg-yellow"/>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-yellow">Reiciendis adipisci beatae consequuntur veniam eaque, porro velit eum harum eveniet quo.</p>
        </div>

        <div className="flex flex-col items-start">
          <audio src="/assets/sons/what-is-that-101236.mp3" controls className="w-[250px] mt-10 p-4 rounded-2xl bg-lightBlue"></audio>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-lightBlue">Molestias nemo vitae consequatur recusandae neque eaque vero magnam saepe repudiandae ab.</p>
        </div>
        <div className="flex flex-col items-end">
          <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[250px] mt-10 p-4 rounded-2xl bg-yellow"/>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-yellow">Temporibus facilis exercitationem dolores cumque! Tempora optio perspiciatis dolorum earum, quo praesentium?</p>
        </div>

        <div className="flex flex-col items-start">
          <audio src="/assets/sons/what-is-that-101236.mp3" controls className="w-[250px] mt-10 p-4 rounded-2xl bg-lightBlue"></audio>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-lightBlue">Repellendus ipsa ad placeat voluptatum dolor ab, vero tenetur labore blanditiis cupiditate?</p>
        </div>

        <div className="flex flex-col items-end">
          <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[250px] mt-10 p-4 rounded-2xl bg-yellow"/>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-yellow">Reiciendis adipisci beatae consequuntur veniam eaque, porro velit eum harum eveniet quo.</p>
        </div>

        <div className="flex flex-col items-start">
          <audio src="/assets/sons/what-is-that-101236.mp3" controls className="w-[250px] mt-10 p-4 rounded-2xl bg-lightBlue"></audio>
          <p className="w-[85%] my-1 p-4 rounded-2xl bg-lightBlue">Molestias nemo vitae consequatur recusandae neque eaque vero magnam saepe repudiandae ab.</p>
        </div>

      </section>

      <form className="flex items-center justify-between z-50 fixed bottom-0 bg-yellow w-full h-[60px] p-4 send-message">
        <button><FontAwesomeIcon icon={faImage} size="lg" className="text-purple"/></button>
        <button><FontAwesomeIcon icon={faCamera} size="lg" className="text-purple"/></button>
        <button><FontAwesomeIcon icon={faMicrophone} size="lg" className="text-purple"/></button>
        <input type="text" name="message" placeholder="Aa" className="w-[60%] h-[30px] rounded-full p-4" />
        <button><FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" className="text-purple"/></button>
       </form>


    </>
  );
};

export default Chat;
