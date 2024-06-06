"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  
  const [lastname, setLastname] = useState("");
  const [firstname, seFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <>
      <section className="signin-ctn">
        <h2>Créer son compte</h2>

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

          <label htmlFor="password">Mot de passe *</label>
          <input
            required
            placeholder="Votre mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="CGVUs-warning">En validant l&apos;inscrption vous acceptez <Link href="/cgvu">les CGVUs, la politique de confidentialité et la gestion des données.</Link></p>
          <button className="signup-btn" type="submit">Enregistrement</button>
        </form>

        <p className="signin_to_up">Vous avez déjà un compte ?</p>
        <p className="signin_to_up link">
          <Link href="/connexion">Connectez-vous.</Link>
        </p>
      </section>
    </>
  );
}
