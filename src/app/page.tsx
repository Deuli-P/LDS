"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="home">
        <Link href="/feed/user/dashboard">
          <Image
            src="/assets/logo/Logo-Couleur.jpg"
            width={100}
            height={100}
            alt="Logo SignsConnect"
            className="home-logo"
          />
        </Link>
        <div className="home-btn-ctn">
          <button
            className="home-btn dictionnary"
            type="button"
            onClick={() => router.push("/dictionnaire-LSF")}
          >
            Dictionnaire
          </button>
          <button
            className="home-btn signin"
            type="button"
            onClick={() => router.push("/auth/connexion")}
          >
            Se connecter
          </button>
        </div>
        <p className="home-description">Application de traduction de la langue de signes française</p>
      </div>
      
    </main>
  );
}
