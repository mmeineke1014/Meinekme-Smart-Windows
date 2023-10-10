import styles from "./styles.module.css"

function AppConFeat(){
    return <div>
        <h4>Display</h4>
        <ul class="list-group">
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>
                <label className='d-flex justify-content-between'>
                    <span>Temperature</span>
                    <input type="checkbox" defaultChecked="true"></input>
                </label>
            </li>
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>
                <label className='d-flex justify-content-between'>
                    <span>Air Quality</span>
                    <input type="checkbox" defaultChecked="true"></input>
                </label>
            </li>
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>
                <label className='d-flex justify-content-between'>
                    <span>Pollen Level</span>
                    <input type="checkbox" defaultChecked="true"></input>
                </label>
            </li>
        </ul>
        <div style={{marginTop:'5px'}}>
            <h4>Auto Open</h4>
            <ul class="list-group">
                <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>
                    <label className='d-flex justify-content-between'>
                        <span>Active</span>
                        <input type="checkbox"></input>
                    </label>
                </li>
            </ul>
            <button className={styles.CustomButton}>Customize...</button>
        </div>
    </div>;
}

export default AppConFeat;