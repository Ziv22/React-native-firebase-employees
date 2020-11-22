import React, { useState , useEffect} from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen/HomeScreen';
import AddEmployeeScreen from './src/AddEmployeeScreen/AddEmployeeScreen';
import UpdateEmployeeScreen from './src/UpdateEmployeeScreen/UpdateEmployeeScreen';
import LoginScreen from './src/LoginScreen/LoginScreen';
import RegisterScreen from './src/RegisterScreen/RegisterScreen';
import { firebase } from './firebase/config'
import styles from './styles';

const Stack = createStackNavigator();

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const signOut = () =>{
    firebase
      .auth()
      .signOut()
      .then(() =>{
        alert("Signed OUt!")
        setUser(null)
        console.log("Sign-out successful")
      })
      .catch(function(err) {
        console.log(err)
      });
  }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <>
        <View>
          <Text>Loading...</Text>
        </View>
      </>
    )
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <>
          {user ? (
            <>
              <Stack.Screen name="Home" options={{title:"Employees"}} component={HomeScreen} />
              <Stack.Screen name="AddEmployeeScreen" 
                            options={{title:"Add an Employee"}} 
                            component={AddEmployeeScreen}
              /> 
              <Stack.Screen name="UpdateEmployeeScreen" options={{title:"Edit Employee's info"}}>
                {props => <UpdateEmployeeScreen {...props} />}
              </Stack.Screen>
            </>
          ):(
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{title:"Login"}} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{title:"Register"}}/> 
            </>
          )} 
          </>      
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App; 