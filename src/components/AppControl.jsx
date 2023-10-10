import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from "./styles.module.css"
import './react-tabs-custom.css';
import AppConRemote from "./AppConRemote"
import AppConStatus from './AppConStatus';
import DropdownMenu from './DropdownMenu';
import AppConFeat from './AppConFeat';

function AppControl(){
    let Windows = [
        { label: 'Window 1', value: 'win1' },
        { label: 'Window 2', value: 'win2' }]

    return <div className={styles.AppControl} style={{fontFamily: 'Century Gothic'}}>

         <DropdownMenu title={"Select Window"} list={Windows} dropdownStyle={styles.WindowDropdown}></DropdownMenu>

         <Tabs>
            <TabList>
                <Tab>Remote</Tab>
                <Tab>Status</Tab>
                <Tab>Features</Tab>
            </TabList>

            <TabPanel>
                <AppConRemote></AppConRemote>
            </TabPanel>
            <TabPanel>
                <AppConStatus></AppConStatus>
            </TabPanel>
            <TabPanel>
                <AppConFeat></AppConFeat>
            </TabPanel>
         </Tabs>
         </div>
}

export default AppControl;