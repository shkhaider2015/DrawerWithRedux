import React from 'react'
import { Text, View } from "react-native";


export const ProfileCard = ({ item }) => 
{
    console.log("Item : ", item )
    
    return <View 
    style={{ 
        marginStart : 'auto', 
        marginEnd : 'auto', 
        marginTop : 50,
        borderRadius : 10,
        padding : 30,
        backgroundColor : "#FFFFFF"
        }} >
        <Text
        style={{ 
            fontSize : 16,
            fontWeight : '900',
        }}
        >Name    :  {item.name} </Text>
        <Text
        style={{ 
            fontSize : 16,
            fontWeight : '900',
        }}
        >Email   :  {item.email} </Text>
        <Text
        style={{ 
            fontSize : 16,
            fontWeight : '900',
        }}
        >Address :  {item.address} </Text>
    </View>

}