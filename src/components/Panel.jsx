import ButtonPanel from "./ButtonPanel";
import Slider from "./Slider";
import styles from "./styles.module.css"

function Panel(){
    return <>
        <div className={styles.Panel}>
            <div className={styles.PanelSlider}>
                <div className={styles.Circle} style={{backgroundColor: "black"}}></div>
                <Slider></Slider>
                <div className={styles.Circle} style={{ border: "2px solid black"}}></div>
            </div>
            <div className={styles.PanelButton}>
                <ButtonPanel text={"privacy"}></ButtonPanel>
                <ButtonPanel text={"display"}></ButtonPanel>
            </div>
        </div>
    </>;
}

export default Panel;