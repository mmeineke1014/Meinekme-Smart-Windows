import Button from "./Button";
import Slider from "./Slider";
import styles from "./styles.module.css"

function Panel(){
    return <>
        <div className={styles.Panel}>
            <div className={styles.PanelSlider}>
                <div className={styles.Circle} style={{backgroundColor: "black"}}></div>
                <Slider></Slider>
                <div className={styles.Circle} style={{backgroundColor: "lightcyan"}}></div>
            </div>
            <div className={styles.PanelButton}>
                <Button text={"privacy"}></Button>
                <Button text={"display"}></Button>
            </div>
        </div>
    </>;
}

export default Panel;