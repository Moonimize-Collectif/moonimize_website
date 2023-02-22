import styles from "@/styles/Members.module.css";
import Titlescreen from "@/components/TitleScreen";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { ContactForm } from "@/components/ContactForm";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState } from "react";

const Contact = ({}) => {  
    const screenWidth = useScreenSize().width;
    const [firstTitleSize, setFirstTitleSize] = useState("0px")
    const [secondTitileSize, setSecondTitleSize] = useState("0px")
    console.log(screenWidth)
    useEffect(() => {
        if (screenWidth > 670){
            setFirstTitleSize("140px")
            setSecondTitleSize("120px")
        }else {
            setFirstTitleSize("110px")
            setSecondTitleSize("90px")
        }    
    });
  
  return (
    <div className="page">
      <div className={styles.pageTitleContainer} style={{height: "20vh"}}>
        <Titlescreen 
        firstTitle={"Contact"} 
        secondTitle={"Allo Houston !"} 
        marginTop={""} 
        marginBottom={""}
        colorFirstTitle={"white"}
        colorSecondTitle={"#1ACAD5"}
        sizeFirstTitle={firstTitleSize}
        sizeSecondTitle={secondTitileSize}
        textAlign={"center"}
        paddingLeft={""}
        />
      </div>
      <div className={styles.membersContainer}>
        <ContactForm/>
      </div>
    </div>
  );
}

export default Contact;
