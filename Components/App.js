import React from 'react'
import { NavigationDrawer } from './Drawer/NavigationDrawer';
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";


const App = () =>
{
    return <Provider store={Store} >
        <NavigationDrawer />
    </Provider>
}


export default App;