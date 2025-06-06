import React from 'react';
import styles from '@/styles/Footer.module.css';
import { MoonimizeButton } from './MoonimizeButton';
import { IconFooter } from './IconFooter';

export const Footer = () => {
    return (
        <nav className={styles.footer}>
            <div className={styles.footerContainer}>
                <h2 className={styles.firstTitle}>Envie de travailler avec nous ?</h2>
                <h1 className={styles.secondTitle} >Let's Talk !</h1>
                <MoonimizeButton icon={false} iconUrl={""} redirectUrl={'https://www.youtube.com/'} text={"Contactez-nous"}/>
                <div className={styles.iconFooter}>
                    <IconFooter iconUrl={"/assets/icon/collectifLogo.svg"} redirectUrl={'https://moonimize.collective.work/'}/>
                    <IconFooter iconUrl={"/assets/icon/linkdinLogo.svg"} redirectUrl={'https://www.youtube.com/'}/>
                </div>
            </div>

        </nav>
    );
}
