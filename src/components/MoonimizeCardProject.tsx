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
        name: "ServTop",
        summary: "Création d'une application mobile et d'un site web permettant de référencer des serveurs privés de jeux-vidéos.",
        logo: "http://drive.google.com/uc?export=view&id=18l7OoaLrXGB-GHik85NG0l0-vgUfyMeg",
        url: "test"
    },
    {
        name: "IA AQUA",
        summary: "Création d'APIs et d'une application mobile & Web pour un objet connecté de surveillance d'arrosage pour le milieu agricole.",
        logo: "http://drive.google.com/uc?export=view&id=1T0qKSSKgLBNaZdB8aTROIiBbZTkSU3P9",
        url: "test"
    },
    {
        name: "Gestium",
        summary: "Création d'application et site web avec React Native de gestion des note de frais, en React Js et ExpressJS",
        logo: "http://drive.google.com/uc?export=view&id=1e_W808pZWYKvI6bU4p4hN89C2N3psxAF",
        url: "test"
    },
    {
        name: "Parky",
        summary: "Parky est une solution de stationnement intelligent destiné aux usagés des smartcity. Elle se présente sous forme d'une application mobile pour les particuliers et d'un site web de gestion pour les mairie.",
        logo: "http://drive.google.com/uc?export=view&id=1Be0uXMSOPSsHjR0ForF6k9qAAu8YNvu9",
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
