import React from 'react';
import styles from "@/styles/MemberCard.module.css";

const MemberCard = ({reverse = false, marginTop, devName, devJob, devDesc, devPic}) => {
  return (
    reverse ?
    <div className={styles.cardContainer} style={{marginTop}}>
        <div className={styles.cardInfosSectionReverse}>
            <h3 className={styles.devName}>{devName}</h3>
            <h4 className={styles.devJob}>Developer Web & Mobile</h4>
            <p className={styles.devDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat quibusdam vel cum explicabo a accusamus, asperiores maiores reiciendis ipsam! Officia eum eos magni ducimus. Esse beatae iste laboriosam odio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea a natus velit neque nihil est ex nemo quasi repellendus pariatur voluptatum deserunt labore molestiae accusantium, cupiditate autem reprehenderit. Numquam, pariatur.
            </p>
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
            <h4 className={styles.devJob}>Developer Web & Mobile</h4>
            <p className={styles.devDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat quibusdam vel cum explicabo a accusamus, asperiores maiores reiciendis ipsam! Officia eum eos magni ducimus. Esse beatae iste laboriosam odio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea a natus velit neque nihil est ex nemo quasi repellendus pariatur voluptatum deserunt labore molestiae accusantium, cupiditate autem reprehenderit. Numquam, pariatur.
            </p>
        </div>
    </div>
  )
}

export default MemberCard