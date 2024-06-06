"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <>
      <section className="signin-ctn">
        <h2>Se connecter</h2>

        <form action="">
          <label htmlFor="email">Email *</label>
          <input
            required
            placeholder="Votre email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="email">Mot de passe *</label>
          <input
            required
            placeholder="Votre mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin-btn" type="submit">Connexion</button>
        </form>

        <p className="signin_to_up">Pas encore de compte ? </p>
        <p className="signin_to_up link">
          <Link href="/auth/register">Vous pouvez en créer un.</Link>
        </p>
      </section>
    </>
  );
}
