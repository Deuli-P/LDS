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
        <footer className="w-full p-10 bg-foreground-light text-texte-light">
          <article className="mb-10">
            <h4 className="text-fontText text-left font-black text-[20px]">Notre Projet</h4>
            <p>Intelligence Artifficielle</p>
            <p><Link href="/dictionnaire-LSF">Dictionnaire LSF</Link></p>
            <p>Accessibilité</p>
          </article>

          <article className="mb-10">
            <h4 className="text-fontText text-left font-black text-[20px]">Général</h4>
            <p>Notre histoire</p>
            <p>L'équipe</p>
          </article>

          <article className="mb-10">
            <h4 className="text-fontText text-left font-black text-[20px]">Besoin d'aide ?</h4>
            <p>FAQ</p>
            <p><Link href="/cgvu">CGVUs</Link></p>
            <p>Contact</p>
          </article>

          <p>@ LDS 2024</p>

          
          <h4 className="text-fontText text-center font-black text-[20px] mt-8">&#169; Signs Connect</h4>
        </footer>
      )}
    </>
  );
};

export default Footer;