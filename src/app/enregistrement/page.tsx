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
      <section className="w-[90%] mb-32">
      <h2 className="uppercase text-[35px] mt-10">Creer son compte</h2>

        <form
          action=""
          className="relative flex flex-col mt-10 mb-30 p-10 rounded-xl bg-yellow"
        >
          <label htmlFor="email">Nom *</label>
          <input
            required
            placeholder="Votre Nom"
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />
          <label htmlFor="firstname">Prénom *</label>
          <input
            required
            placeholder="Votre prénom"
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => seFirstname(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />
          <label htmlFor="email">Email *</label>
          <input
            required
            placeholder="Votre email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />

          <label htmlFor="password">Mot de passe *</label>
          <input
            required
            placeholder="Votre mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />

          <p className="text-justify mb-10">
            En validant l'inscrption vous acceptez{" "}
            <Link href="/cgvu">
              les CGVUs, la politique de confidentialité et la gestion des
              données.
            </Link>
          </p>
          <button
            className="w-fit absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] py-4 px-8 bg-purple text-white text-fontTitle rounded-xl"
            type="submit"
          >
            Enregistrement
          </button>
        </form>

        <p className="text-center mt-20">Vous avez déjà un compte ?</p>
        <p className="text-center text-purple font-black">
          <Link href="/connexion">Connectez-vous.</Link>
        </p>
      </section>
    </>
  );
}
