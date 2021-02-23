import React from 'react'
import { Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import { add } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'


const ProfilePage = () => {

    const dispath = useDispatch()
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [address, setAddress] = React.useState("")


    

    const handleSubmit = () =>
    {
        console.log("Clicked !!")
        dispath({
            type : "addProfile",
            payload : {
                name : name,
                email : email,
                address : address
            }
        })

        ToastAndroid.show("Successfuly Added Data", ToastAndroid.SHORT)
        setName("")
        setEmail("")
        setAddress("")
    }

    return <View style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }} >

        <View style={{ backgroundColor: '#FFFFFF', width: 300, padding: 20, borderRadius: 10, marginTop: 'auto', marginBottom: 'auto' }} >
            
            <Text style={{ marginTop : 20 }} >Enter Name</Text>
            <TextInput
                style={{ borderWidth: .1, height: 35, borderRadius: 2, paddingStart: 10, marginTop: 5 }}
                placeholder="Name"
                value={name}
                onChangeText={e => setName(e)}
                
            />

            <Text style={{ marginTop: 10 }} >Enter Email</Text>
            <TextInput
                style={{ borderWidth: .1, height: 35, borderRadius: 2, paddingStart: 10, marginTop: 5 }}
                placeholder="Email"
                value={email}
                onChangeText={e => setEmail(e)}
            />

            <Text style={{ marginTop: 10 }} >Enter Address</Text>
            <TextInput
                style={{ borderWidth: .1, height: 35, borderRadius: 2, paddingStart: 10, marginTop: 5 }}
                placeholder="Address"
                value={address}
                onChangeText={e => setAddress(e)}
            />

            {/* <View style={{ marginTop : 10, height : 20, borderRadius: 10 }} >
            <Button
            style={{ borderRadius : 20 }}
            title="Submit"
            onPress={handleSubmit}
            />
            </View> */}

            <TouchableOpacity 
            onPress={handleSubmit}
            style={{ backgroundColor : 'gray', height : 25, alignItems : 'center', borderRadius : 10, marginTop : 25, marginBottom : 10 }} >
                <Text style={{ color : 'white', fontWeight : 'bold', marginTop : 'auto', marginBottom : 'auto' }} >Submit</Text>
            </TouchableOpacity>

        </View>

    </View>
}

export { ProfilePage }