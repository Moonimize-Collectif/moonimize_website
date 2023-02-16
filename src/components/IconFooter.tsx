import React from 'react';
import styles from '@/styles/IconFooter.module.css';
import Link from 'next/link';


export const IconFooter = ({iconUrl, redirectUrl} : any) => {
    return (

        <Link href={redirectUrl} className={styles.IconLink}>
            <img className={styles.IconFooter} src={iconUrl}/>
            <img className={styles.RingIcon} src={"/assets/icon/vector.svg"}/>
        </Link>
    );
}