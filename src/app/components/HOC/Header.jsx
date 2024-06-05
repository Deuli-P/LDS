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
        <header>
          <div className="header-ctn">
            <div className="header-menu">
              <div className="header-logo_div">
                <Link href="/"><img className="logo-img" src="/Logo-Header.png" alt="Logo SignsConnect" /></Link>
                <h1>Signs Connect</h1>
              </div>
              <FontAwesomeIcon icon={faBars} size="xl" className={menuHidden ? "header-pic" : "hidden"} onClick={toggleMenu} />
              <FontAwesomeIcon icon={faXmark} size="xl" className={menuHidden ? "hidden" : "header-pic"} onClick={toggleMenu} />
            </div>

            <nav className={!menuHidden ? "" : "hidden"} onClick={toggleMenu}>
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
