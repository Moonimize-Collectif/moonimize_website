import styles from "@/styles/Members.module.css";
import PageTitle from "@/components/PageTitle";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { ContactForm } from "@/components/ContactForm";

const Contact = ({}) => {  
  
  return (
    <div className="page">
      <div className={styles.pageTitleContainer}>
        <PageTitle
            mainTitle={"Contact"}
            subTitle={"Allo Houston !"}
            sizeMainTitle="140px"
            sizeSubTitle="120px"
            colorSubTitle="#1ACAD5"
            textAlign="center"
            marginTop="-110px"
        />
      </div>
      <div className={styles.membersContainer}>
        <ContactForm/>
      </div>
    </div>
  );
}

export default Contact;
