import React from 'react'
import styles from '@/styles/TitleScreen.module.css'
import globalStyle from '../styles/globals.css'

// Component allowing to display an adaptable title and subtitle with an adaptable top and bottom margin, titile's color,
// size and font.
export default function Title_screen({firstTitle, secondTitle, display,marginTop, marginBottom, colorFirstTitle, colorSecondTitle, sizeSecondTitle, sizeFirstTitle, textAlign, paddingLeft} :any) {
    return (
    // <div className={styles.divTitle} style={{display: "flex",marginTop: marginTop , marginBottom: marginBottom, textAlign: textAlign, paddingLeft: paddingLeft}}>
 
       <div className={styles.divTitle} style={{display: "flex",flexDirection:"column", justifyContent:"center", alignItems:textAlign,marginTop: marginTop , marginBottom: marginBottom,paddingLeft: paddingLeft}}>
        <h2 className={styles.secondTitle} style={{color: colorSecondTitle, fontSize: sizeSecondTitle }}>{secondTitle}</h2>
        <h1 className={styles.firstTitle} style={{color: colorFirstTitle, fontSize: sizeFirstTitle }}>{firstTitle}</h1>
      </div>
    );
};