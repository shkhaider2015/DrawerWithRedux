import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { ProfilePage } from "./ProfilePage";


const DrawerNavigator = createDrawerNavigator()

const NavigationDrawer = () =>
{
    return <NavigationContainer>
        <DrawerNavigator.Navigator initialRouteName="Home"  >
            <DrawerNavigator.Screen name="Home" component={ HomePage }  />
            <DrawerNavigator.Screen name="About" component={ AboutPage } />
            <DrawerNavigator.Screen name="Profile" component={ ProfilePage } />
        </DrawerNavigator.Navigator>
    </NavigationContainer>
}

export {NavigationDrawer}