import styles from "@/styles/MemberCard.module.css";
import React from "react";

const MemberCard = ({
	reverse = false,
	marginTop,
	devName,
	devJob,
	devDesc,
	devPic,
}) => {
	return reverse ? (
		<div className={styles.cardContainerReverse} style={{ marginTop }}>
			<div className={styles.cardInfosSectionReverse}>
				<h3 className={styles.devName}>{devName}</h3>
				<h4 className={styles.devJob}>{devJob}</h4>
				<div className={styles.cardDescContainer}>
					<p className={styles.devDesc}>{devDesc}</p>
				</div>
			</div>
			<div className={styles.cardPicSectionReverse}>
				<img src={devPic} className={styles.memberPicReverse} />
			</div>
		</div>
	) : (
		<div className={styles.cardContainer} style={{ marginTop }}>
			<div className={styles.cardPicSection}>
				<img src={devPic} className={styles.memberPic} />
			</div>
			<div className={styles.cardInfosSection}>
				<h3 className={styles.devName}>{devName}</h3>
				<h4 className={styles.devJob}>{devJob}</h4>
				<div className={styles.cardDescContainer}>
					<p className={styles.devDesc}>{devDesc}</p>
				</div>
			</div>
		</div>
	);
};

export default MemberCard;
