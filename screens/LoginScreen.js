import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from "expo-status-bar"
import codingtopia from "../assets/codingtopia.jpg"

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light" />
            <Image 
                source={codingtopia}
                style={styles.imageLogo}
            />
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 700, marginTop: 10}}>CODINGTOPIA</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Email"/>
                <Input placeholder="Password" />
            </View>
        </View> 
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    imageLogo: {
        width: 200, 
        height: 200,
        margin: 'auto',
        marginTop: 20,
        borderRadius: 20
    }
})
