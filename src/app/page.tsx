"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="relative w-full h-screen home">
        <Link href="/feed/user/dashboard">
          <img
            src="/assets/logo/Logo-Couleur-FondTransparentC.png"
            alt="Logo SignsConnect"
            className="absolute w-60 right-1/2 bottom-1/2 translate-x-1/2"
          />
        </Link>

        <div className="absolute flex justify-between right-1/2 top-1/2 translate-x-1/2 mt-12">
          <button
            className="bg-lightGrey w-60 mx-2.5 py-2.5 rounded-full text-fontTitle scale-h-102 cursor-pointer"
            type="button"
            onClick={() => router.push("/dictionnaire-LSF")}
          >
            Dictionnaire
          </button>
          <button
            className="bg-yellow w-60 mx-2.5 py-2.5 rounded-full text-fontTitle scale-h-102 cursor-pointer"
            type="button"
            onClick={() => router.push("/connexion")}
          >
            Se connecter
          </button>
        </div>

        <p className="absolute right-1/2 top-1/2 translate-x-1/2 mt-12 mt-36 w-10/12 text-center">Application de traduction de la langue de signes française</p>
      </div>
    </>
  );
}
