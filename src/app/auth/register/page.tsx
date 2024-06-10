"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InlineInput from "@/components/Input/Inline";

export default function SignUp() {
  
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const SubmitForm = (e) => {
    e.preventDefault
    console.log("Submit");
    
  }

  return (
      <section className="w-full flex flex-col items-center px-4 py-8">
        <h2>Inscription</h2>

        <form action="submit" className="flex flex-col bg-primary rounded-lg p-3">
          <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <InlineInput
              type='text'
              label="Prenom"
              required={true}
              placeholder="Votre Prenom"
              value={firstname}
              onChange={(e)=>{setFirstname(e.target.value)}}
            />
            <InlineInput
              type='text'
              label="Nom"
              required={true}
              placeholder="Votre Nom"
              value={lastname}
              onChange={(e)=>{setLastname(e.target.value)}}
            />
          </div>
            <InlineInput
              type='email'
              label="Email"
              required={true}
              placeholder="Votre Email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
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
  );
}
