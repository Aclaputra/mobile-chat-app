import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Input, Text, Button } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    // Note: Not working ! still find out what is the cause

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"
            })
        })
        .catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <StatusBar style="auto" />

            <Text h4 style={{marginBottom: 50}}>Create a Codingtopia account</Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder="Profile picture URL (optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button containerStyle={styles.button} raised onPress={register} title="Register" />
            <View style={{ height: 100 }}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    }
})
