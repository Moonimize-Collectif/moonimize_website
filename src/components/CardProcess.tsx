import styles from '@/styles/CardProcess.module.css'

export const CardProcess = ({number, title, description} :any) => {
    return (
        <div className={styles.divCardProcess} style={{width: "80%", margin: "auto"}}>
            <p>{number}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}