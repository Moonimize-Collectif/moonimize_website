import React from 'react';
import styles from '@/styles/PageTitle.module.css'

const PageTitle = ({ mainTitle, subTitle, colorMainTitle, colorSubTitle, sizeMainTitle, sizeSubTitle, textAlign, marginTop}) => {
  return (
    <div className={styles.pageTitleContainer} style={{alignItems: textAlign}}>
      <h2 className={styles.subTitle} style={{fontSize: sizeSubTitle, color: colorSubTitle}}>{subTitle}</h2>
      <h1 className={styles.mainTitle} style={{fontSize: sizeMainTitle, color: colorMainTitle, marginTop: marginTop}}>{mainTitle}</h1>
    </div>
  )
}

export default PageTitle