" use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

import styles from './NavLink.module.css';

const NavLink = ({ href, children }) => {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a className={isActive ? styles.active : styles.navLink}>{children}</a>
    </Link>
  );
};

export default NavLink;