import styles from "./styles.module.css"

function ButtonPanel({text}){
    return <button className={styles.PanelButton}>{text}</button>
}

export default ButtonPanel;