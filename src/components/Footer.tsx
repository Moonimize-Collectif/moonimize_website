import React from 'react';
import styles from '@/styles/Footer.module.css';
import { MoonimizeButton } from './MoonimizeButton';
import Link from 'next/link';

export const Footer = () => {
    return (
        <nav className={styles.footer}>
            <div className={styles.footerContainer}>
                <h2 className={styles.firstTitle}>Envie de travailler avec nous ?</h2>
                <h1 className={styles.secondTitle} >Let's Talk !</h1>
                <MoonimizeButton icon={false} iconUrl={""} redirectUrl={'https://www.youtube.com/'}/>
                <MoonimizeButton icon={true} iconUrl={"/assets/icon/send-arrow.svg"} redirectUrl={'https://www.youtube.com/'}/>
            </div>

        </nav>
    );
}
