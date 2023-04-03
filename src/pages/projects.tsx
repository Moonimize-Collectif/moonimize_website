// import Head from "next/head";
import TitleScreen from "@/components/TitleScreen";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState } from "react";
import ProjectComponent from "@/components/ProjectComponent";
import { fetchWrapper } from "@/utils/fetchWrapper";
import styles from '@/styles/ProjectComponent.module.css';

const Projects =  ({projects}) => { 

   

    console.log(projects)


    const screenWidth = useScreenSize().width;
    const [firstTitleSize, setFirstTitleSize] = useState("0px")
    const [secondTitileSize, setSecondTitleSize] = useState("0px")

    useEffect(() => {
        if (screenWidth > 670){
            setFirstTitleSize("80px")
            setSecondTitleSize("100px")
        }
        else if (screenWidth >= 320 && screenWidth <= 375){
            setFirstTitleSize("45px")
            setSecondTitleSize("65px")
        }
        
        else {
            setFirstTitleSize("55px")
            setSecondTitleSize("75px")
        }    
    });

    return (
        <div className={styles.page}>
            <div className={styles.divContainer} style={{ display: "flex", height: "20vh", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "20px",marginTop:"20px" }}>
                <TitleScreen
                firstTitle={"REALISATIONS"}
                secondTitle={"Nos étoiles"}
                display={"flex"}
                marginTop={"0%"}
                marginBottom={"0%"}
                colorFirstTitle={"white"}
                colorSecondTitle={"#1ACAD5"}
                sizeSecondTitle={secondTitileSize}
                sizeFirstTitle={firstTitleSize}
                textAlign={"center"}
                paddingLeft={"0"}
                />
            </div>
            
            {projects.length == 0 
                ? 
                <p style={{"color": "white", "textAlign": "center", "fontFamily": "ChakraPetch", "fontSize": "30px", "paddingBottom": "7%"}}>Aucunes réalisations</p> 
                : 
                projects.map((project, key) => (  
                    <ProjectComponent id={key} name={project.name} logo={project.logo} description={project.summary} categories={project.categories} technology={project.technologies}/>  
                ))
            }
            
            
           
            
            
        </div>
    )
}

export async function getStaticProps(context) {
    const getProjects = await fetchWrapper.get(`Projects`);
    const projects = await getProjects.data;
  
    return {
        props: {
            projects,
        },
    };
  }


export default Projects