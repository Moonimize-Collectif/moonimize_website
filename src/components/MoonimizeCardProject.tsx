import React, { useEffect, useState } from 'react'
import styles from '@/styles/MoonimizeCardProject.module.css';
import { fetchWrapper } from '@/utils/fetchWrapper';

const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, ut aliquam massa nisl quis nunc. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, ut aliquam massa nisl quis nunc.",
      image: "https://logos-marques.com/wp-content/uploads/2021/03/Twitter-logo.png",
      url:"test"
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, ut aliquam massa nisl quis nunc. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, ut aliquam massa nisl quis nunc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png",
      url: "test"
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, ut aliquam massa nisl quis nunc. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, ut aliquam massa nisl quis nunc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
      url: "test"
    },
  ]

export const MoonimizeContainerProject = ({ title, description, image }: any) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const getProjects = await fetchWrapper.get(`projects`);
            const projectsAPI = await getProjects.data;
            console.log(projectsAPI)
            setProjects(projectsAPI)
        }
        
          // call the function
        fetchData().catch(console.error);
       
    }, [])
    return (
        <div style={{ display: "flex", flexDirection: "row", height: "auto", justifyContent: "space-between", alignItems: "center" }}>
            {
                projects ? projects.map((project, index) => {
                    return <MoonimizeCardProject key={index} title={project.title} description={project.description} image={project.image} />
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
