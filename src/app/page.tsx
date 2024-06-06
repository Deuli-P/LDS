"use client";

import CtaPrimary from "@/components/CTA/cta-primary";
import CtaSecondary from "@/components/CTA/cta-secondary";
import CtaThirdy from "@/components/CTA/cta-thirdy";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

          <span className='font-roboto text-3xl'>Roboto</span>
          <span className='font-chopin text-3xl'>Chopin</span>
          <span className='font-munday text-3xl'>Munday</span>
          <CtaPrimary onClick={handleTest}>
            <span>
              Test CTA Primary
            </span>
          </CtaPrimary>
          <CtaSecondary 
            onClick={handleTest}
          >
          <span>
            Test CTA Secondary
          </span>
          </CtaSecondary>
          <CtaThirdy
            onClick={handleTest}
          >
            <span>
              Test CTA Thirdy
            </span>
          </CtaThirdy>
        </div>

      </div> */}
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
            onClick={() => router.push("/connexion")}
          >
            Se connecter
          </button>
        </div>

        <p className="home-description">Application de traduction de la langue de signes française</p>
      </div>
      
    </main>
  );
}
