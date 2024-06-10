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
        <header className="bg-purple w-full mx-auto py-6">
          <div className="w-full flex flex-col items-center m-auto">
            <div className="w-full flex items-center justify-between px-10">
              <div className="flex header-logo_div">
                <Link href="/" onClick={toggleMenu} ><img className="w-12" src="/assets/logo/Logo-Header.png" alt="Logo SignsConnect" /></Link>
                <h1 className="text-[24px]/[24px] ml-3.5 uppercase text-lightBlue">Signs Connect</h1>
              </div>
              <FontAwesomeIcon icon={faBars} size="xl" className={menuHidden ? "text-white" : "hidden"} onClick={toggleMenu} />
              <FontAwesomeIcon icon={faXmark} size="xl" className={menuHidden ? "hidden" : "text-white"} onClick={toggleMenu} />
            </div>

            <nav className={!menuHidden ? "w-full flex flex-col items-start mt-6" : "hidden"} onClick={toggleMenu}>
              <NavLink href="/">Accueil</NavLink>
              {!signin && !signup && (
                <>
                  <NavLink href="/user/conversation">Conversation</NavLink>
                  <NavLink href="/user/dashboard">Mon Compte</NavLink>
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
