import style from '@/styles/globals.css'
import styles from '@/styles/CardProcess.module.css'

export const CardProcess = ({number, title, description, positionNumber} :any) => {
    if (positionNumber == 'right') {
        return(
            <div className={styles.divCardProcess}>
                <p className={styles.pCardRight}>{number}</p> 
                <div style={{width: "70%", margin: "auto"}}>
                    <h2 className={styles.titleCard}>{title}</h2>
                    <p className={styles.describCard}>{description}</p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={styles.divCardProcessLeft}>
                <p className={styles.pCardLeft}>{number}</p>
                <div style={{width: "70%", margin: "auto"}}>
                    <h2 className={styles.titleCard}>{title}</h2>
                    <p className={styles.describCard}>{description}</p>
                </div>
                
            </div>
    )
    }
}