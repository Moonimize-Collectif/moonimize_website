import React from 'react';
import styles from "@/styles/MemberCard.module.css";

const MemberCard = ({reverse = false, marginTop, devName, devJob, devDesc, devPic}) => {
  return (
    reverse ?
    <div className={styles.cardContainer} style={{marginTop}}>
        <div className={styles.cardInfosSectionReverse}>
            <h3 className={styles.devName}>{devName}</h3>
            <h4 className={styles.devJob}>{devJob}</h4>
            <p className={styles.devDesc}>{devDesc}</p>
        </div>
        <div className={styles.cardPicSectionReverse}>
            <div className={styles.memberPicReverse}></div>
        </div>
    </div>
    :
    <div className={styles.cardContainer}>
        <div className={styles.cardPicSection}>
            <div className={styles.memberPic}></div>
        </div>
        <div className={styles.cardInfosSection}>
            <h3 className={styles.devName}>{devName}</h3>
            <h4 className={styles.devJob}>{devJob}</h4>
            <p className={styles.devDesc}>{devDesc}</p>
        </div>
    </div>
  )
}

export default MemberCard