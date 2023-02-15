import React from 'react';
import styles from '@/styles/MoonimizeButton.module.css';
import Link from 'next/link';

export const MoonimizeButton = () => {
    return (
        <nav className={styles.moonimizeButton}>
            <Link href={"/"}>Contactez-nous</Link>
        </nav>
    );
}