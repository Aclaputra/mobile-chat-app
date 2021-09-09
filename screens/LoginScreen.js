import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from "expo-status-bar"
import codingtopia from "../assets/codingtopia.jpg"

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView behavior="padding " style={styles.container}>
            <StatusBar style="light" />
            <Image 
                source={codingtopia}
                style={styles.imageLogo}
            />
            {/* <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 700, marginTop: 10}}>CODINGTOPIA</Text> */}
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>
            </View>

            <Button containerStyle={styles.button} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" />
            <view style={{ height: 100 }} />
        </KeyboardAvoidingView> 
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    imageLogo: {
        width: 150, 
        height: 150,
        borderRadius: 20
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
