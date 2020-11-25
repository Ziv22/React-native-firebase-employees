import * as React from 'react';
import {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import { Card } from "react-native-elements"
import styles from './styles'
import  ApiCalls from '../apiCalls'
const apiCalls = new ApiCalls()
function addEmployeeScreen({ navigation }) {
  const [name, setName]               = useState(''),
        [dateOfBirth, setDateOfBirth] = useState(''),
        [position, setPosition]       = useState(''),
        [phoneNumber, setPhoneNumber] = useState('')

  const addEmployee = async () =>{
    await apiCalls.addEmployee({
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
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Date Of Birth</Text>
          <TextInput
          style={styles.input}
          placeholder={dateOfBirth}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
        </View>

        <View>
          <Text style={styles.inputTitle}>Position</Text>
          <TextInput
          style={styles.input}
          placeholder={position}
          placeholderTextColor="#aaaaaa"
          type=""
          onChangeText={(text) => setPosition(text)}
          value={position}
        />
        </View>
        <View>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
          style={styles.input}
          autoCompleteType="tel"
          placeholder={phoneNumber}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={addEmployee}>
          <Text style={styles.buttonTitle}>Add Employee</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  export default addEmployeeScreen;