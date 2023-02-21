import React from 'react';
import styles from '@/styles/MoonimizeButton.module.css';
import Link from 'next/link';


export const MoonimizeButton = ({icon, iconUrl, redirectUrl, text} : any) => {
    return (

        <Link href={redirectUrl} className={styles.moonimizeLink}>
            <button className={styles.moonimizeButton}>{text}
            {icon ?
                    <img alt={"une icône représentant l'action du bouton associé"} className={styles.buttonIcon} src={iconUrl}/>
                :""}
            </button>
        </Link>

    );
}