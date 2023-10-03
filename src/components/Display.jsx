import styles from "./styles.module.css"

function Display(){
    return <div>
        <div style={{fontSize: 60}}>
            <p>70°F</p>
        </div>
        <div className="d-flex flex-row justify-content-center">
            <p>Air: </p>
            <div className={styles.Good}>
                <p>Good</p>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-center"> 
            <p>Pollen: </p>
            <div className={styles.Good}>
                <p>Good</p>
            </div>
        </div>
    </div>
}

export default Display;