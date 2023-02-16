import React from 'react';
import styles from '@/styles/MoonimizeButton.module.css';
import Link from 'next/link';


export const MoonimizeButton = ({icon, iconUrl, redirectUrl} : any) => {
    return (

        <Link href={redirectUrl} className={styles.moonimizeLink}>
            <button className={styles.moonimizeButton}>Contactez-nous
            {icon ?
                    <img className={styles.buttonIcon} src={iconUrl}/>
                :""}
            </button>
        </Link>

    );
}