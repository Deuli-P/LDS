"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // menuburger version mobile
  const [menuHidden, setMenuHidden] = useState(true);
  const toggleMenu = () => setMenuHidden(!menuHidden);

  const pathname = usePathname();
  const home = pathname === "/";
  const signin = pathname === "/connexion";
  const signup = pathname === "/enregistrement";

  return (
    <>
      {!home && (
        <header className="bg-background-light w-full mx-auto py-6 border-b border-texte-light">
          <div className="w-full flex flex-col items-center m-auto">
            <div className="w-full flex items-center justify-between px-10">
              <div className="flex header-logo_div">
                <Link href="/" onClick={toggleMenu} ><img className="w-12" src="/assets/logo/Logo-Header.png" alt="Logo SignsConnect" /></Link>
                <h1 className="text-[24px]/[24px] ml-3.5 uppercase text-texte-light">Signs Connect</h1>
              </div>
              <FontAwesomeIcon icon={faBars} size="xl" className={menuHidden ? "text-texte-light" : "hidden"} onClick={toggleMenu} />
              <FontAwesomeIcon icon={faXmark} size="xl" className={menuHidden ? "hidden" : "text-texte-light"} onClick={toggleMenu} />
            </div>

            <nav className={!menuHidden ? "w-full flex flex-col items-start mt-6" : "hidden"} onClick={toggleMenu}>
              <NavLink href="/">Accueil</NavLink>
              {!signin && !signup && (
                <>
                  <NavLink href="/user/conversation">Conversation</NavLink>
                  <NavLink href="/user/dashboard">Mon Compte</NavLink>
                  <button type="button"  className="bg-primary-light my-6 text-texte-light w-fit mx-auto py-2.5 px-8 text-[18px] text-fontTitle uppercase rounded-2xl text-center text-fontTitle">Se Connecter</button>
                  <button type="button"  className="bg-secondary-light text-texte-dark w-fit mx-auto py-2.5 px-8 text-[18px] text-fontTitle uppercase rounded-2xl text-center text-fontTitle">Se déconnecter</button>
                </>
              )}
            </nav>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
