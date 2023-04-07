import React, { useEffect, useState } from 'react';
import globalStyle from '../styles/globals.css'
import styles from '@/styles/ProjectComponent.module.css'
import Link from 'next/link';

const ProjectComponent = ({id, name, logo, description, categories, technology} : any) => {

    const [category , setCategory ] = useState('')

    useEffect(() => {
        var category = ""
        for (let i = 0 ; i < categories.length ; i++){
            if (i == 0) {
                category = categories[i].name
            }
            else { 
                category = category + " & " + categories[i].name
            }
            setCategory(category)  
        }
    })

    if (id == undefined){
        <div>
            <p>Auncunes realisations.</p>
        </div>
    }
    if (id%2 == 0) {
        return  (
            <Link className={styles.container} href={`/projects/${id}`}>
                <div className={styles.divLogo}>
                    <img className={styles.logoImg} src={logo} alt={"Logo de "+name}/>
                </div>
                <div className={styles.divProjet}>
                    <h1>{name}</h1>
                    <h2>{category}</h2>
                    <p>{description}</p>
                    <img className={styles.techImg} src={technology} alt={"Logo de "+name}/>
                </div>   
            </Link>
        )
    }
    else {
        return  (
            <Link href={`/projects/${id}`} className={styles.container}>
                <div className={styles.divProjet}>
                    <h1>{name}</h1>
                    <h2>{category}</h2>
                    <p>{description}</p>
                    <img className={styles.techImg} src={technology} alt={"Logo de "+name}/>
                </div>
                <div className={styles.divLogo}>
                    <img className={styles.logoImg} src={logo} alt={"Logo de "+name} />
                </div>
            
            </Link>
        )
    }
}

export default ProjectComponent