import styles from "./styles.module.css"

function Display(){
    return <div style={{paddingTop:"70px"}}>
        <div style={{fontSize: 60}}>
            <p>70°F</p>
        </div>
        <div className="d-flex flex-row justify-content-center">
            <p>Air: </p>
            <div className={styles.Poor}>
                <p>Poor</p>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-center"> 
            <p>Pollen: </p>
            <div className={styles.Good}>
                <p>Low</p>
            </div>
        </div>
    </div>
}

export default Display;