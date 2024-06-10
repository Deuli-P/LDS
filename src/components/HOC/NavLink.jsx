" use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavLink = ({ href, children }) => {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a className={isActive ? "bg-lightBlue text-darkPurple w-full h-20 text-[20px]/[54px] text-fontTitle uppercase px-28" : "text-white w-full h-20 text-[20px]/[54px] text-fontTitle uppercase px-28 hover:bg-lightBlue hover:text-purple"}>{children}</a>
    </Link>
  );
};

export default NavLink;