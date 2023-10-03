import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.css'

function Slider(){

    return <div className={styles.Slider}>
        <input input type="range" class="form-range"></input>
    </div>
}

export default Slider;