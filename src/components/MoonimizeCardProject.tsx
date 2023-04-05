import React, { useEffect, useState } from 'react'
import styles from '@/styles/MoonimizeCardProject.module.css';
import { fetchWrapper } from '@/utils/fetchWrapper';

const listProjects = [
    {
        name: "Happer",
        summary: "Creation d'une application mobile pour la marque Woman et Luxury. Cette application permets de proposer des vetenements de createurs sur un reseau social dédié a la mode. ",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },
    {
        name: "Happer",
        summary: "Creation d'une application mobile pour la marque Woman et Luxury. Cette application permets de proposer des vetenements de createurs sur un reseau social dédié a la mode. ",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },
    {
        name: "Happer",
        summary: "Creation d'une application mobile pour la marque Woman et Luxury. Cette application permets de proposer des vetenements de createurs sur un reseau social dédié a la mode. ",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },
    {
        name: "Happer",
        summary: "Creation d'une application mobile pour la marque Woman et Luxury. Cette application permets de proposer des vetenements de createurs sur un reseau social dédié a la mode. ",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },
    {
        name: "Happer",
        summary: "Creation d'une application mobile pour la marque Woman et Luxury. Cette application permets de proposer des vetenements de createurs sur un reseau social dédié a la mode. ",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },

    
]

export const MoonimizeContainerProject = ({ title, description, image }: any) => {
    const [projects, setProjects] = useState(listProjects);

    useEffect(() => {
        /*const fetchData = async () => {
            const getProjects = await fetchWrapper.get(`projects`);
            const projectsAPI = await getProjects.data;
            console.log(projectsAPI)
            setProjects(projectsAPI)
        }
        
          // call the function
        fetchData().catch(console.error);*/
        //setProjects(projects)
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "row", height: "auto", width:"100%",justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {
                projects ? projects.map((project, index) => {
                    return <MoonimizeCardProject key={index} title={project.name} description={project.summary} image={project.logo} />
                }) : null
            }
        </div>
    )
}

export const MoonimizeCardProject = ({ title, description, image }: any) => {
    return (
        <div className={styles.card}>
            <div className={`${styles.face} ${styles.face1}`}>
                <div className={styles.content}>
                    <img className={styles.icon} src={image}></img>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className={`${styles.face} ${styles.face2}`}>
                <div className={styles.content}>
                    <p>{description}</p>
                    <a className={styles.ProjectLink} href="#" type="button">More</a>
                </div>
            </div>
        </div>
    )
}
