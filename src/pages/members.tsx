import styles from "@/styles/Members.module.css";
import Head from "next/head";
// import PageTitle from "@/components/PageTitle";
import MemberCard from "@/components/MemberCard";
import TitleScreen from "@/components/TitleScreen";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const Members = ({ members }) => {
	console.log(members);
	const screenWidth = useScreenSize().width;
	const [firstTitleSize, setFirstTitleSize] = useState("0px");
	const [secondTitileSize, setSecondTitleSize] = useState("0px");
	useEffect(() => {
		if (screenWidth > 670) {
			setFirstTitleSize("110px");
			setSecondTitleSize("140px");
		} else if (screenWidth > 360) {
			setFirstTitleSize("4rem");
			setSecondTitleSize("4rem");
		} else {
			setFirstTitleSize("2.5rem");
			setSecondTitleSize("2.5rem");
		}
	});

	return (
		<div className="page">
			<div className={styles.pageTitleContainer} style={{ height: "20vh" }}>
				<TitleScreen
					firstTitle={"L'ÉQUIPAGE"}
					secondTitle={"Dream Team"}
					marginTop={"0%"}
					marginBottom={"0%"}
					colorFirstTitle={"white"}
					colorSecondTitle={"#1ACAD5"}
					sizeFirstTitle={firstTitleSize}
					sizeSecondTitle={secondTitileSize}
					textAlign={"center"}
					paddingLeft={"0"}
				/>
			</div>
			<div className={styles.membersContainer}>
				{members.map((member, index) => {
					return (
						<MemberCard
							key={member._id}
							reverse={index % 2 !== 0}
							marginTop={index === 0 ? "0px" : "32px"}
							devName={`${member.firstname} ${member.lastname}`}
							devJob={member.job}
							devDesc={member.description}
							devPic={member.picture_url}
						/>
					);
				})}
				{/* <MemberCard reverse={true} marginTop="32px" /> */}
			</div>
		</div>
	);
};

export async function getStaticProps(context) {
	const getMembers = await fetchWrapper.get(`administrators/members`);
	console.log(getMembers);
	const members = await getMembers.data;
	console.log(members);
	return {
		props: {
			members,
		},
	};
}

export default Members;
