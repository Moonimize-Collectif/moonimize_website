import React from 'react';
import styles from "@/styles/RealisationDetail.module.css";
import Carousel from '@/components/Carousel';
import IconDownArrow from '/public/assets/icon/down-arrow.svg';

const uppercaseLetter = (name: String) => {
    const words = name.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ").replace(/\s/g, '');
}

const RealisationDetail = ({ project }: any) => {
    const [knowMore, setKnowMore] = React.useState(true)

    const pictures = project.pictures.length < 1 ? [
        "https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg",
        "https://cdn.wallpapersafari.com/1/97/co341S.jpg",
        "https://cdn.wallpapersafari.com/56/11/OIf0lp.jpg"
    ] : project.pictures;

    function handleKnowMore() {
        setKnowMore(!knowMore)
    }

    return (
        <div className={styles.container}>
            <Carousel children={pictures} />
            <div className={styles.detailContainer}>
                <h3 className={styles.mainTitle}>Le projet</h3>
                <div className={styles.subcontainer}>
                    <h4>Description</h4>
                    <text style={{ maxHeight: knowMore ? "200px" : "700px" }}>{project.description}</text>
                </div>
                <div className={styles.knowMoreContainer}>
                    <button onClick={handleKnowMore}>En savoir plus</button>
                    <img src={IconDownArrow} style={{transform: knowMore ? "": "rotate(180deg)"}}></img>
                </div>
                <div className={styles.subcontainer}>
                    <h4>Le client</h4>
                    <div className={styles.logoContainer}>
                        <img src={project.logo}></img>
                    </div>
                    <text>{project.clientDescription}</text>
                </div>
                <div className={styles.subcontainer}>
                    <h4>Les compétences utilisées</h4>
                    <div className={styles.categoriesContainer}>
                        {
                            project.categories.map((category: any, index: number) => (
                                <div className={styles.categoryContainer} key={index}>
                                    <p>#{uppercaseLetter(category.name)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealisationDetail