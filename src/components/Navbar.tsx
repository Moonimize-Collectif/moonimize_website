import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import {NavbarLine} from '@/components/NavbarLine'
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavbarLine/>
      <ul>
        <li><Link href='/about'><span>001</span>A propos</Link></li>
        <li><Link href='/team'><span>002</span>La team</Link></li>
        <li><Link href='/projects'><span>003</span>Réalisations</Link></li>
        <li><Link href='/contact'><span>004</span>Contact</Link></li>
      </ul>
    </nav>
  );
}
