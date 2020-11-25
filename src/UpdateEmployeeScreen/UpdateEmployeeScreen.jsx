import * as React from 'react';
import {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import { Card} from "react-native-elements"
import styles from './styles';
import  ApiCalls from '../apiCalls'
const apiCalls = new ApiCalls()

function updateEmployeeScreen({route,navigation}) {
  const [name, setName]               = useState(route.params.name),
        [dateOfBirth, setDateOfBirth] = useState(route.params.dateOfBirth),
        [position, setPosition]       = useState(route.params.position),
        [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber),
        {id} = route.params
        
  const updateEmployee = async () =>{
    await apiCalls.updateEmployee({
      id,
      name,
      dateOfBirth,
      position,
      phoneNumber
    })
    navigation.goBack()
  }
    return (
      <Card style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder={name}
            placeholderTextColor='#788eec'
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Date Of Birth</Text>
          <TextInput
          style={styles.input}
          placeholder={dateOfBirth}
          placeholderTextColor='#788eec'
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
        </View>

        <View>
          <Text style={styles.inputTitle}>Position</Text>
          <TextInput
          style={styles.input}
          placeholder={position}
          placeholderTextColor='#788eec'
          onChangeText={(text) => setPosition(text)}
          value={position}
        />
        </View>
        <View>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
          style={styles.input}
          placeholder={phoneNumber}
          placeholderTextColor='#788eec'
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={updateEmployee}>
          <Text style={styles.buttonTitle}>Save</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  export default updateEmployeeScreen;