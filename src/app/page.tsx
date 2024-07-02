"use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <div className="relative w-full h-screen home">
        <Link href="user/dashboard">
          <Image
            src="/assets/logo/Logo-Couleur-FondTransparentC.png"
            alt="Logo SignsConnect"
            className="absolute w-60 right-1/2 bottom-1/2 translate-x-1/2"
          />
        </Link>

        <div className="absolute flex justify-between right-1/2 top-1/2 translate-x-1/2 mt-12">
          <Link
            className="bg-lightBlue w-60 mx-2.5 py-2.5 rounded-2xl text-center text-fontTitle scale-h-102 cursor-pointer"
            type="button"
            href="/dictionnaire-LSF"
          >
            Dictionnaire
          </Link>
          <Link
            className="bg-primary-light w-60 mx-2.5 py-2.5 rounded-2xl text-center text-fontTitle scale-h-102 cursor-pointer"
            type="button"
            href="/connexion"
          >
            Se connecter
          </Link>
        </div>

        <p className="absolute right-1/2 top-1/2 translate-x-1/2 mt-12 mt-36 w-10/12 text-center">Application de traduction de la langue de signes française</p>
      </div>
    </>
  );
}