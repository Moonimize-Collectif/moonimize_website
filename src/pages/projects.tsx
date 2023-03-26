// import Head from "next/head";
import TitleScreen from "@/components/TitleScreen";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState } from "react";
import ProjectComponent from "@/components/ProjectComponent";
import { fetchWrapper } from "@/utils/fetchWrapper";

const Projects =  ({projects}) => { 

   

    // console.log(projects)

    const screenWidth = useScreenSize().width;
    const [firstTitleSize, setFirstTitleSize] = useState("0px")
    const [secondTitileSize, setSecondTitleSize] = useState("0px")

    useEffect(() => {
        if (screenWidth > 670){
            setFirstTitleSize("110px")
            setSecondTitleSize("140px")
        }else {
            setFirstTitleSize("88px")
            setSecondTitleSize("110px")
        }    
    });

    return (
        <div>
            <div style={{ display: "flex", height: "70vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
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
            {projects.map((project, key) => (  
                
                
           

                <ProjectComponent id={key} name={project.name} logo={project.logo} description={project.description} categories={project.categories}/>
            
    
                
            ))}
            
            
           
            
            
        </div>
    )
}

export async function getStaticProps(context) {
    const getProjects = await fetchWrapper.get(`project`);
    const projects = await getProjects.data;
  
    return {
        props: {
            projects,
        },
    };
  }


export default Projects