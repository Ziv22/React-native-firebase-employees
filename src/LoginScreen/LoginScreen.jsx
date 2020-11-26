import React, { useContext, useState} from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { firebase } from '../../firebase/config'
import * as Facebook from 'expo-facebook'
import styles from './styles'
import { UserContext } from '../UserContext'

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const {user, setUser} = useContext(UserContext)

    const onFooterLinkPress = () => {
        navigation.navigate('RegisterScreen')
    }
    const loginWithFacebook = async () => {    
        try{
            const appId = Expo.Constants.manifest.extra.facebook.appId
            const appName = "react-native-employees-manager"
            
            await Facebook.initializeAsync({appId,appName})
            const permissions = ['public_profile', 'email']
            const { type, token  } = await Facebook.logInWithReadPermissionsAsync(
                {permissions}
            )
            switch (type) {
                case 'success': {
                await firebase.auth()
                const credential = firebase.auth.FacebookAuthProvider.credential(token)
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then((response) =>{
                        const uid = response.user.uid
                        const usersRef = firebase.firestore().collection('users')
                        usersRef
                        .doc(uid)
                        .get()
                        .then(firestoreDocument => {
                            if (!firestoreDocument.exists) {
                                alert("User does not exist anymore.")
                                return
                            }
                            const user = firestoreDocument.data()
                            setUser(user)
                        })
                        .catch(error => {
                            alert(error)
                        })
                    })
                    .catch(err => {console.log(err.toString())})
                
                // return Promise.resolve({type: 'success'})
                }
                case 'cancel': {
                return Promise.reject({type: 'cancel'})
                }
            } 
        }
        catch(err){
            console.log(err.toString())
            alert(`Facebook Login Error: ${err}`)
        }
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return
                        }
                        const user = firestoreDocument.data()
                    })
                    .catch(error => {
                        alert(error)
                    })
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.facebookButton}
                    onPress={()=>loginWithFacebook()}>
                    <Text style={styles.buttonTitle}>Log in With Facebook</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
  }

  export default LoginScreen