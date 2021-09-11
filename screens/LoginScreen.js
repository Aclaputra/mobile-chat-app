import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from "expo-status-bar"
import codingtopia from "../assets/codingtopia.jpg"
import { auth } from '../firebase'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser) {
                navigation.replace('Home')
            } 
        })

        return unsubscribe
    }, [])

    const signIn = () => {}

    return (
        <KeyboardAvoidingView behavior="padding " style={styles.container}>
            <StatusBar style="auto" />
            <Image 
                source={codingtopia}
                style={styles.imageLogo}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>
            </View>

            <Button containerStyle={styles.button} title="Login" />
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register" />
            <View style={{ height: 100 }} />
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
        borderRadius: 25,
        marginBottom: 20,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
