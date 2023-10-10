import styles from "./styles.module.css"

function AppConStatus(){
    return <div>
        <h3>Status:</h3>
        <ul class="list-group">
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>Closed</li>
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>Window Tint: 50%</li>
        </ul>
        <h3 style={{marginTop:'15px'}}> Sensor Output:</h3>
        <ul class="list-group">
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>External Temperature: 70°F</li>
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>Air Quaility: 20</li>
            <li class="list-group-item" style={{backgroundColor:"#e9e9ed", width:"80%", margin:"auto"}}>Pollen Level: 25</li>
        </ul>
    </div>
}

export default AppConStatus;