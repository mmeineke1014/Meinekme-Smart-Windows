import ButtonApp from "./ButtonApp";
import Slider from "./Slider";
import styles from "./styles.module.css"

function AppConRemote(){
    return <div>
         <div className="container text-center">
            <div className="row">
                <div className="col">
                    <ButtonApp text={"OPEN"}></ButtonApp>
                </div>
                <div className="col">
                    <ButtonApp text={"CLOSE"}></ButtonApp>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ButtonApp text={"PRIVACY"}></ButtonApp>
                </div>
                <div className="col">
                    <ButtonApp text={"CLEAN"}></ButtonApp>
                </div>
            </div>
            <div className="row">
            <div className={styles.PanelSlider} style={{marginTop: "25px"}}>
                <div className={styles.Circle} style={{backgroundColor: "black"}}></div>
                <Slider></Slider>
                <div className={styles.Circle} style={{ border: "2px solid black"}}></div>
            </div>
            </div>
        </div>
    </div>
}

export default AppConRemote;