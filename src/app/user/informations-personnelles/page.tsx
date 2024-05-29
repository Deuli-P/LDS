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
      <Link href="/user/dashboard" className="back-pic"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /> Retour</Link>
      
      <section className="dashboard-ctn">
        <h2>Mes informations</h2>


        <form action="">
          <label htmlFor="email">Nom *</label>
          <input
            required
            placeholder="Votre Nom"
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="firstname">Prénom *</label>
          <input
            required
            placeholder="Votre prénom"
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => seFirstname(e.target.value)}
          />
          <label htmlFor="email">Email *</label>
          <input
            required
            placeholder="Votre email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="action-btn" type="submit">Modifier</button>
        </form>
        
      <p className="password-modify"><Link href="/user/dashboard/modifier-mot-de-passe">Modifier le mot de passe</Link></p>
      <p className="delete-account"><Link href="/user/delete">Supprimer mon compte</Link></p>
      </section>

      
    </>
  );
};

export default PrivateInfos;
