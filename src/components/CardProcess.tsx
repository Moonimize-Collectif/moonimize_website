import style from '@/styles/globals.css'
import styles from '@/styles/CardProcess.module.css'

export const CardProcess = ({number, title, description, positionNumber} :any) => {
    return (
        <div className={styles.divCardProcess} style={{width: "66%", margin: "2% auto"}}>
            {positionNumber == 'right' ?
                <p className={styles.pCardRight}>{number}</p>
                :
                <p className={styles.pCardLeft}>{number}</p>
            }
            {/* <p className={styles.pCard}>{number}</p> */}
            <h2 className={styles.titleCard}>{title}</h2>
            <p className={styles.describCard}>{description}</p>
        </div>
    )
}