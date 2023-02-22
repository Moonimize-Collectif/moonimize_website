import Head from "next/head";
import styles from "@/styles/Members.module.css";
// import PageTitle from "@/components/PageTitle";
import TitleScreen from "@/components/TitleScreen";
import MemberCard from "@/components/MemberCard";
import { fetchWrapper } from "@/utils/fetchWrapper";

const Members = ({members}) => {
  console.log(members);
  
  
  return (
    <div className="page">
      <div className={styles.pageTitleContainer} style={{height: "20vh"}}>
            <TitleScreen
                firstTitle={"L'ÉQUIPAGE"}
                secondTitle={"Dream Team"}
                marginTop={"0%"}
                marginBottom={"0%"}
                colorFirstTitle={"white"}
                colorSecondTitle={"#1ACAD5"}
                sizeSecondTitle={"100px"}
                sizeFirstTitle={"80px"}
                textAlign={"center"}
                paddingLeft={"0"}
            />
      </div>
      <div className={styles.membersContainer}>
        {members.map((member, index) => {
          
          return (<MemberCard key={member._id} reverse={index%2!==0} marginTop={index === 0 ? "0px" : "32px"} devName={`${member.firstname} ${member.lastname}`} devJob={member.job} devDesc={member.description} />);
        })}
        {/* <MemberCard reverse={true} marginTop="32px" /> */}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const getMembers = await fetchWrapper.get(`administrator/members`);
  const members = await getMembers.data;

  return {
      props: {
          members,
      },
  };
}

export default Members;
