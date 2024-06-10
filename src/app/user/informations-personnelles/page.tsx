"use client";
import React, { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const PrivateInfos = () => {

  
  const [lastname, setLastname] = useState("");
  const [firstname, seFirstname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div  className="flex justify-start z-50 sticky top-[0] w-[100%] px-8 py-4 bg-purple text-white border-none">
        <Link href="/user/dashboard"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /></Link>
        <p className="pl-6 text-fontTitle ">Retour</p>
      </div>
      
      <section className="w-[90%] mb-32 flex flex-col items-center">
        <h2 className="uppercase text-[35px] mt-10">Mes informations</h2>


        <form action="" className="relative flex flex-col mt-10 mb-30 p-10 rounded-xl bg-yellow">
          <label htmlFor="email" className="pl-4">Nom *</label>
          <input
            required
            placeholder="Votre Nom"
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />
          <label htmlFor="firstname" className="pl-4">Prénom *</label>
          <input
            required
            placeholder="Votre prénom"
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => seFirstname(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />
          <label htmlFor="email" className="pl-4">Email *</label>
          <input
            required
            placeholder="Votre email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />

          <button className="w-fit absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] py-4 px-8 bg-purple text-white text-fontTitle rounded-xl" type="submit">Modifier</button>
        </form>
        
      <p className="w-fit mt-16 py-4 px-6 bg-lightBlue text-purple text-fontTitle text-center rounded-xl"><Link href="/user/dashboard/modifier-mot-de-passe">Modifier le mot de passe</Link></p>
      <p className="w-fit my-8 py-4 px-6 bg-red text-white text-fontTitle text-center rounded-xl"><Link href="/user/delete">Supprimer mon compte</Link></p>
      </section>

      
    </>
  );
};

export default PrivateInfos;
