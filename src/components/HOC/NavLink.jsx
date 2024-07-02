" use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavLink = ({ href, children }) => {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a className={isActive ? "bg-lightBlue text-texte-light w-full h-16 text-[18px]/[44px] text-fontTitle uppercase text-center" : "text-white w-full h-16 text-[18px]/[44px] text-fontTitle uppercase text-center hover:bg-lightBlue hover:text-purple"}>{children}</a>
    </Link>
  );
};

export default NavLink;