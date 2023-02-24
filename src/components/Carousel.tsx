import React, { useEffect } from "react"
import styles from "@/styles/Carousel.module.css";

const CarouselItem = ({ children, width, url} : any ) => {
    console.log(url)
    return (
        <div className={styles.carouselItem} style={{width: width}}>
            <img src={url} alt={children}/>
        </div>
    )
}

const Carousel = ({children} : any) => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const updateIndex = (index : number) => {
        if (index < 0) {
            setActiveIndex(0)
        } else if (index > children.length - 1) {
            setActiveIndex(0)
        }
        else {
            setActiveIndex(index)
        }
    }        

   useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className={styles.carousel}>
            <div className={styles.inner} style={{transform : `translateX(-${activeIndex * 100}%)`}}>
                {
                    children.map((child : any, index : number) => (
                        <CarouselItem key={index} width={"100%"} url={child}>{"test " + index}</CarouselItem>
                    ))
                }
            </div>
            <div className={styles.indicators}>
                <button className={styles.prev} onClick={() => updateIndex(activeIndex - 1)}>{"<"}</button>
                {
                    children.map((child : any, index : number) => (
                        <button className={styles.itemPoint + `${activeIndex === index ? " active": ""}`} key={index} onClick={() => setActiveIndex(index)}></button>
                    ))
                }
                <button className={styles.next} onClick={() => updateIndex(activeIndex + 1)}>{">"}</button>
            </div>
        </div>
    )
}

export default Carousel