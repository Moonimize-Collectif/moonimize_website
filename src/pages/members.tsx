import Head from "next/head";
import styles from "@/styles/Members.module.css";
import PageTitle from "@/components/PageTitle";
import MemberCard from "@/components/MemberCard";
import { fetchWrapper } from "@/utils/fetchWrapper";

const Members = ({members}) => {
  console.log(members);
  
  
  return (
    <div className="page">
      <div className={styles.pageTitleContainer}>
        <PageTitle
            mainTitle={"L'ÉQUIPAGE"}
            subTitle={"Dream Team"}
            sizeMainTitle="100px"
            sizeSubTitle="80px"
            colorSubTitle="#1ACAD5"
            textAlign="center"
            marginTop="-56px"
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
