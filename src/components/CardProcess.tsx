import style from '@/styles/globals.css'
import styles from '@/styles/CardProcess.module.css'

export const CardProcess = ({number, title, description} :any) => {
    return (
        <div className={styles.divCardProcess} style={{width: "66%", margin: "auto"}}>
            <p className={styles.pCard}>{number}</p>
            <h2 className={styles.titleCard}>{title}</h2>
            <p className={styles.describCard}>{description}</p>
        </div>
    )
}