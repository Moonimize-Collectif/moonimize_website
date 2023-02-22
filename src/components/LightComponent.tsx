import styles from "@/styles/LightComponent.module.css"

export const LightComponent = ({position} : any) => {

    if (position == "right"){
        return (
            <div className={styles.lightRight} style={{width:"0.5%"}}></div>
        )
    }
    else {
        return (
            <div className={styles.lightLeft} style={{width:"0.5%"}}></div>
        ) 
    }
    
}