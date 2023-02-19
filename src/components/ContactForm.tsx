import style from '@/styles/globals.css'
import styles from '@/styles/ContactForm.module.css'
import { MoonimizeButton } from './MoonimizeButton'
import arrowIcon from '/public/assets/icon/send-arrow.svg'

export const ContactForm = () => {
    return (
        <div className={styles.divCardProcess}>
            <form className={styles.formContact}>
                <h3 className={styles.formTitle}>Formulaire envoi d'opportunité</h3>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Titre *</label>
                    <input className={styles.inputForm} type="text" name="name" placeholder='Un super Projet !'/>
                </div>
                <div className={styles.inputGroup}>
                    <div className={styles.divForm}>
                        <label className={styles.labelForm}>Email *</label>
                        <input className={styles.inputForm} type="email" name="email" placeholder='john.doe@gmail.com'/>
                    </div>
                    <div className={styles.divForm}>
                        <label className={styles.labelForm}>Téléphone</label>
                        <input className={styles.inputForm} type="tel" name="phone" placeholder="0601854631" />
                    </div>
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Message</label>
                    <textarea className={styles.textAreaForm} name="message" placeholder='Il y a bien longtemps, dans une galaxie lointaine, très lointaine....'/>
                </div>
                <div className={styles.divFormButton}>
                    <MoonimizeButton icon={true} iconUrl={arrowIcon} redirectUrl={"/"} text={"Envoyer"}/>
                </div>
            </form>
        </div>
    )
}