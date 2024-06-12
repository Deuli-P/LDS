"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faEllipsis } from "@fortawesome/free-solid-svg-icons"; 
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";  

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
    <section className="w-full my-10 flex flex-col justify-center items-center">
      <h2  className="uppercase w-10/12 text-[35px] mt-10">Traducteur de la langue des <span className="bg">signes</span></h2>
      <p className="w-10/12 mt-10 text-center">Notre IA est aux services des autres, permettant la communication de communauté différente. Pour commencer a l’utiliser il faut
      Lancer le dialogue .</p>
      <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[200px] mt-10 mx-auto"/>
      <button
        className="block bg-yellow w-60 py-2.5 mx-auto mt-10 rounded-full text-fontTitle scale-h-102 cursor-pointer"
        type="button"
        onClick={() => router.push("/dictionnaire-LSF")}
      >
        Lancer dialogue
      </button>
    </section>

    <section className="w-full my-10 flex flex-col justify-center items-center bg-foreGround pb-10">
      <h2  className="w-10/12 uppercase text-[35px] mt-10">Aide à la communication</h2>
      <div className="w-10/12 flex justify-around mt-10">
        <button><FontAwesomeIcon icon={faChevronLeft} size="xl" /></button>
        <img src="/assets/images/avatar.jpg" alt="avatar LDS" className="w-[200px] mt-10"/>
        <button><FontAwesomeIcon icon={faChevronRight} size="xl" /></button>
      </div>
      <FontAwesomeIcon icon={faEllipsis} size="xl" />
    </section>

    <section className="w-full my-10 flex flex-col justify-center items-center">
      <h2  className="w-10/12 uppercase text-[35px] mt-10">Ils nous font confiance</h2>
      <div className="w-10/12 flex flex-wrap justify-center mt-10">
        <img src="/assets/images/icons8-logo-nintendo-switch-90.png" alt="logo entreprise" className="w-[60px] mx-[2%] mt-10"/>
        <img src="/assets/images/icons8-airbnb-100.png" alt="logo entreprise" className="w-[60px] mx-[2%] mt-10"/>
        <img src="/assets/images/icons8-entouré-de-vapeur-100.png" alt="logo entreprise" className="w-[60px] mx-[2%] mt-10"/>
        <img src="/assets/images/icons8-logo-100.png" alt="logo entreprise" className="w-[60px] mx-[2%] mt-10"/>
        <img src="/assets/images/icons8-logo-mastercard-128.png" alt="logo entreprise" className="w-[60px] mx-[2%] mt-10"/>
        <img src="/assets/images/icons8-logo-amazon-alexa-100.png" alt="logo entreprise" className="w-[60px] mx-[2%] mt-10"/>
      </div>
    </section>

    <section className="w-full my-10 flex flex-col justify-center items-center bg-foreGround">
      <h2  className="w-10/12 uppercase text-[35px] mt-10">Où vont vos données ?</h2>
      <p className="w-10/12 mt-10 text-center mb-10">Notre projet est avant tout un système de communication pour aider des personnes a se
      faire comprendre et comprendre autrui. Vos données ne sont utilisés que pour améliorer le service proposé en alimentant l'IA pour le rendre plus performant.</p>
    </section>

    <section className="w-full my-10 flex flex-col justify-center items-center">
      <h2  className="w-10/12 uppercase text-[35px] mt-10">Avis utilisateurs</h2>

      <div className="bg-lightpurple text-white w-11/12 mb-10 flex justify-between items-center p-8 rounded-[40px] boxShadow-3xl shadow-first">
        <figure className="w-[20%] flex flex-col items-center">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          <figcaption>
            <p>username</p>
            <p>★★★★☆</p>
          </figcaption>
        </figure>
        <p className="w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam modi consectetur quasi doloremque nisi sit.</p>
      </div>

      <div className="bg-lightpurple text-white w-11/12 mb-10 flex justify-between items-center p-8 rounded-[40px] shadow-first">
        <figure className="w-[20%] flex flex-col items-center">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          <figcaption>
            <p>username</p>
            <p>★★★★☆</p>
          </figcaption>
        </figure>
        <p className="w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam modi consectetur quasi doloremque nisi sit.</p>
      </div>

      <div className="bg-lightpurple text-white w-11/12 mb-10 flex justify-between items-center p-8 rounded-[40px] shadow-first">
        <figure className="w-[20%] flex flex-col items-center">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          <figcaption>
            <p>username</p>
            <p>★★★★☆</p>
          </figcaption>
        </figure>
        <p className="w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam modi consectetur quasi doloremque nisi sit.</p>
      </div>
      <div className="bg-lightpurple text-white w-11/12 mb-10 flex justify-between items-center p-8 rounded-[40px] shadow-first">
        <figure className="w-[20%] flex flex-col items-center">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          <figcaption>
            <p>username</p>
            <p>★★★★☆</p>
          </figcaption>
        </figure>
        <p className="w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam modi consectetur quasi doloremque nisi sit.</p>
      </div>
    </section>

    <section className="w-full my-10 relative">
      <img src="/assets/images/sav.jpg" alt="image du service client" className="w-full"/>
      <button
        className="w-[190px] bg-yellow px-10 py-5 rounded-full text-fontTitle scale-h-102 cursor-pointer absolute bottom-2/4 right-2/4 translate-y-2/4 translate-x-2/4"
        type="button"
        onClick={() => router.push("/dictionnaire-LSF")}
      >
        Contacter support
      </button>
    </section>


    </>
  );
}
