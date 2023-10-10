import styles from "./styles.module.css"

function AppRules(){
    return <div className={styles.AppControl}>
        <div className={styles.AppRules}>
            <div className="hstack gap-2" style={{marginTop:"5px", marginBottom:"8px"}}>
                <h4 style={{marginLeft:"30px"}}>Rules</h4>
                <button className="ms-auto" style={{marginRight:"45px", borderRadius:"8px", padding:"5px"}}>CLOSE</button>
            </div>
            <ul class="list-group overflow-auto" style={{height:"300px", width:"250px", marginLeft:"30px"}}>
                <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"100%", margin:"auto"}}>
                    <p> <b>Open</b> if <b>Temperature</b> &gt; <bt>60°F</bt></p>
                    <input type="radio" id="ruleOn" name="active1" value={true} defaultChecked="true"/>
                    <label for="ruleOn">Active</label>
                    <input type="radio" id="ruleOff" name="active2" value={false} style={{marginLeft:"15px"}}/>
                    <label for="ruleOff">Inactive</label>
                </li>
                <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"100%", margin:"auto"}}>
                <p> <b>Close</b> if <b>Temperature</b> &gt; <bt>75°F</bt></p>
                    <input type="radio" id="ruleOn" name="active3" value={true} defaultChecked="true"/>
                    <label for="ruleOn">Active</label>
                    <input type="radio" id="ruleOff" name="active3" value={false} style={{marginLeft:"15px"}}/>
                    <label for="ruleOff">Inactive</label>
                </li>
                <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"100%", margin:"auto"}}>
                    <p><b>Close</b> if <b>Pollen</b> is <b>high</b></p>
                    <input type="radio" id="ruleOn" name="active4" value={true} defaultChecked="true"/>
                    <label for="ruleOn">Active</label>
                    <input type="radio" id="ruleOff" name="active4" value={false} style={{marginLeft:"15px"}}/>
                    <label for="ruleOff">Inactive</label>
                </li>
                <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"100%", margin:"auto"}}>
                    <p> <b>Close</b> if <b>Weather</b> is <b>raining</b></p>
                    <input type="radio" id="ruleOn" name="active5" value={true} defaultChecked="true"/>
                    <label for="ruleOn">Active</label>
                    <input type="radio" id="ruleOff" name="active5" value={false} style={{marginLeft:"15px"}}/>
                    <label for="ruleOff">Inactive</label>
                </li>
            </ul>
            <div className="hstack gap-2" style={{marginTop:"5px", marginBottom:"8px"}}>
                <button style={{marginLeft:"30px", borderRadius:"8px", padding:"5px", width:"100px"}}>EDIT</button>
                <button className="ms-auto" style={{marginRight:"30px", borderRadius:"8px", padding:"5px", width:"100px"}}>ADD</button>
            </div>
        </div>
    </div>
}

export default AppRules;