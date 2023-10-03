import AppControl from './components/AppControl.jsx'
import Display from './components/Display.jsx';
import Panel from './components/Panel.jsx'
import styles from "./components/styles.module.css"


function App(){
  return <>
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img src="..\public\WindowUI.png" alt="Img: Window with control panel and app" height={300}/>
        </div>
        <div className="col">
          <div className={styles.WindowDisplay}>
            <Display></Display>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Panel></Panel>
        </div>

      </div>
    </div>
  </>;
}

export default App; 