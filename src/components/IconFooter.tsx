import React from 'react';
import styles from '@/styles/IconFooter.module.css';
import Link from 'next/link';


export const IconFooter = ({iconUrl, redirectUrl} : any) => {
    return (

        <Link href={redirectUrl} className={styles.IconLink}>
            <img alt={"une icône représentant l'action du bouton associé"} className={styles.IconFooter} src={iconUrl}/>
            <img alt={"une icône représentant un anneau bleu atour de l'icône"} className={styles.RingIcon} src={"/assets/icon/vector.svg"}/>
        </Link>
    );
}