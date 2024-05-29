"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const home = pathname === "/";
  const conversation = pathname === "/user/conversation";
  const newconversation = pathname === "/user/nouvelle-conversation";

  return (
    <>
      {!home && !conversation && !newconversation && (
        <footer>
          <article>
            <h4>Notre Projet</h4>
            <p>Intelligence Artifficielle</p>
            <p><Link href="/dictionnaire-LSF">Dictionnaire LSF</Link></p>
            <p>Accessibilité</p>
          </article>

          <article>
            <h4>Général</h4>
            <p>Notre histoire</p>
            <p>L'équipe</p>
          </article>

          <article>
            <h4>Besoin d'aide ?</h4>
            <p>FAQ</p>
            <p><Link href="/cgvu">CGVUs</Link></p>
            <p>Contact</p>
          </article>

          <p>@ LDS 2024</p>
        </footer>
      )}
    </>
  );
};

export default Footer;
