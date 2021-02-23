import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ProfileCard } from './ProfileCard'


const HomePage = ({ navigation }) =>
{

    const GetInfo = useSelector(state => state)
    console.log("Select : ", GetInfo.ProfileReducer)

    return <View>
        <Text style={{ marginStart : 'auto', marginEnd : 'auto', marginTop : 10 }} >Home Page</Text>
        <FlatList
        data={GetInfo.ProfileReducer}
        renderItem={(item) => <ProfileCard item={item.item} />}
        keyExtractor={(item, index) => index.toString()}
        />
    </View>
}

export {HomePage}