import React, { useEffect, useState } from 'react'
import styles from '@/styles/ServiceCard.module.css';
import { fetchWrapper } from '@/utils/fetchWrapper';

const listProjects = [
    {
        name: "Web developpement",
        summary: "Nous avons un grand panel de compétences qui nous permet de couvrir différents langages et de répondre à vos besoins comme Javascript / Python / PHP ainsi que leurs frameworks associés.",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },
    {
        name: "Mobile developpement",
        summary: "Notre expertise en création d'application mobile nous permet de réaliser et de vous accompagner dans votre projet d'application mobile (visuel, parcours utilisateurs, code...)",
        logo: "http://drive.google.com/uc?export=view&id=1oeY_UKiZPPMC6IbJI-L_Zttyd1KsRQAK",
        url: "test"
    },
    {
        name: "No code",
        summary: "Lorsque votre projet correspond à ce genre de technologies, nos membres pourront tout à fait vous proposer un résultat qui correspondra à vos attentes.",
        logo: "http://drive.google.com/uc?export=view&id=18l7OoaLrXGB-GHik85NG0l0-vgUfyMeg",
        url: "test"
    },
    {
        name: "Data Science",
        summary: "Profitez d'une analyse décisionnelle de vos données avec l'analyse exploratoire et la Data Visualisation. Optimisez vos performances avec l'apprentissage automatique et l'apprentissage profond.",
        logo: "http://drive.google.com/uc?export=view&id=1T0qKSSKgLBNaZdB8aTROIiBbZTkSU3P9",
        url: "test"
    },
    {
        name: "Cloud",
        summary: "Nous pouvons aussi vous proposer nos services lorsqu'il s'agit de configurer vos sites web ou vos solutions back-end sur les différents provider cloud du marché comme AWS, Azure, etc...",
        logo: "http://drive.google.com/uc?export=view&id=1e_W808pZWYKvI6bU4p4hN89C2N3psxAF",
        url: "test"
    },
    {
        name: "Gestion de projet",
        summary: "Notre expertise en gestion de projet permet d'assurer une planification, une organisation et une coordination efficaces pour garantir la livraison réussie de projets web, en respectant les délais, le budget et les exigences de nos clients.",
        logo: "http://drive.google.com/uc?export=view&id=1Be0uXMSOPSsHjR0ForF6k9qAAu8YNvu9",
        url: "test"
    },

    
]

export const MoonimizeContainerService = ({ title, description, image }: any) => {
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
            <div className={styles.gridServicesContainer}>
            {
                projects ? projects.map((project, index) => {
                    return <MoonimizeCardService key={index} title={project.name} description={project.summary} image={project.logo} />
                }) : null
            }
            </div>
        </div>
    )
}

export const MoonimizeCardService = ({ title, description, image }: any) => {
    return (
        <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>{title}</h2>
            <p className={styles.serviceCardDescription}>{description}</p>
        </div>
    )
}
