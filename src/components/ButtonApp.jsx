import styles from "./styles.module.css"

function ButtonApp({text}){
    return <button className={styles.AppButton}>{text}</button>
}

export default ButtonApp;